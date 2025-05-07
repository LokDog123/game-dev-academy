
/*--Регистрация?--*/

const openPopUp = document.getElementById('open_pop_up'); 
const closePopUp = document.getElementById('pop_up_close'); 
const popUp = document.getElementById('pop_up'); 

openPopUp.addEventListener('click', function(e) { 
    e.preventDefault(); 
    popUp.classList.add('active'); 
}); 

closePopUp.addEventListener('click', function() { 
    popUp.classList.remove('active'); 
}); 

// Пример функции регистрации
function registerUser() {
    // Здесь можно добавить логику для регистрации пользователя
    alert("Регистрация успешна!"); // Пример уведомления
}
/*^*/
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();