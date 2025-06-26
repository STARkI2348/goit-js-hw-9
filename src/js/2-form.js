const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state'); // Получает данные из localStorage
if (savedData) {
  const parsedData = JSON.parse(savedData);
  form.elements.email.value = parsedData.email || '';
  form.elements.message.value = parsedData.message || '';
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value; // Фиксирует изменения в поле
  localStorage.setItem('feedback-form-state', JSON.stringify(formData)); // Сохраняет данные в localStorage
});

//Проверка и отправка формы
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
