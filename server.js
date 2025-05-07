const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const responses = {
    login: "Для решения проблем с авторизацией, пожалуйста, проверьте свои учетные данные.",
    registration: "Для регистрации, пожалуйста, перейдите на страницу регистрации.",
    record: "Чтобы создать запись, заполните форму на странице создания записи."
};

wss.on('connection', (ws) => {
    console.log('Клиент подключен');

    ws.on('message', (message) => {
        console.log(`Получено сообщение: ${message}`);
        const response = handleMessage(message);
        ws.send(response);
    });

    ws.on('close', () => {
        console.log('Клиент отключен');
    });
});

function handleMessage(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('login') || lowerCaseMessage.includes('авторизация') || lowerCaseMessage.includes('sign in')) {
        return responses.login;
    } else if (lowerCaseMessage.includes('регистрация')) {
        return responses.registration;
    } else if (lowerCaseMessage.includes('создание записи')) {
        return responses.record;
    } else {
        return "Извините, я не понимаю вашу проблему.";
    }
}

console.log('Сервер запущен на порту 8080');