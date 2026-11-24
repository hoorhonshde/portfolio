// 1. Dark Mode
const themeBtn = document.querySelector('#theme-btn');
const moonIcon = document.querySelector('#moon-icon');
const sunIcon = document.querySelector('#sun-icon');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  moonIcon.classList.toggle('hidden');
  sunIcon.classList.toggle('hidden');
});

// 2. Төслийн дэлгэрэнгүй цонх нээх
const openBtn = document.querySelector('#open-weather-preview');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#close-modal');
const modalTitle = document.querySelector('#modal-title');
const modalScreen = document.querySelector('#modal-screen');
const modalDesc = document.querySelector('#modal-desc');

openBtn.addEventListener('click', () => {
  modalTitle.textContent = 'Цаг Агаар Шалгах Вэб Апп (API)';
  modalScreen.textContent = 'GET https://api.weatherapi.com/v1/current.json?q=Ulaanbaatar  →  200 OK (-14°C)';
  modalDesc.textContent = 'Хэрэглэгч хотын нэр оруулахад JavaScript-ийн fetch() функцээр үнэгүй Weather API руу хүсэлт илгээж, ирсэн JSON өгөгдлөөс температур болон төлөвийг дэлгэц дээр гаргадаг.';
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
async function getWeather() {
  // Улаанбаатарын өргөрөг, уртрагаар API key-гүйгээр шууд татах
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=47.92&longitude=106.92&current_weather=true';
  
  const response = await fetch(url);
  const data = await response.json();
  
  // Дэлгэц дээрх -14°C гэдгийг бодит градусаар солих
  const tempElement = document.querySelector('.mock-temp');
  tempElement.textContent = `${data.current_weather.temperature}°C`;
}

getWeather();