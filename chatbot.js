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

            if (lowerCaseMessage.includes('login') || 
                lowerCaseMessage.includes('авторизация') || 
                lowerCaseMessage.includes('sign in')) {
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

        // Клиентская часть
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () => {
            console.log('Подключено к серверу');
        };

        socket.onmessage = (event) => {
            appendMessage(event.data, 'bot');
        };

        document.getElementById('send-button').addEventListener('click', sendMessage);
        document.getElementById('user-input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        function sendMessage() {
            const inputField = document.getElementById('user-input');
            const message = inputField.value.trim();
            
            if (message) {
                appendMessage(message, 'user');
                socket.send(message);
                inputField.value = '';
            }
        }

        function appendMessage(message, sender) {
            const chatBox = document.getElementById('chat-box');
            const messageDiv = document.createElement('div');
            
            messageDiv.classList.add('chat-message', sender);
            messageDiv.textContent = message;
            
            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight; // Прокрутка вниз
        }