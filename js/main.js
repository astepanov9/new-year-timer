// Элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

// Делаем расчеты
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Устанавливаем год на страницу
year.innerText = currentYear + 1;

const updateCounter = () => {
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    // Дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    // Часы
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    // Минуты
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    // Секунды
    const secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
};

updateCounter();

// Обновление функции каждую секунду
setInterval(() => {
    updateCounter();
}, 1000);

// Preloader
setTimeout(() => {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);

