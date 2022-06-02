const input = document.querySelector('input[type=text]');
const icon = document.querySelector('.tick');
const container = document.querySelector('.field');

const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

input.addEventListener('input', (e) => {
  const { value } = e.target;

  const isValid = email_pattern.test(value);

  if (isValid) {
    container.classList.add('valid');
  } else {
    container.classList.remove('valid');
  }
});
