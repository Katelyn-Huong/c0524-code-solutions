'use strict';
const $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const formInfo = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log('form information', formInfo);
  $contactForm.reset();
});
