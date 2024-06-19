interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const $formElements = $contactForm.elements as FormElements;

  const formInfo = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };

  console.log('form information', formInfo);
  $contactForm.reset();
});
