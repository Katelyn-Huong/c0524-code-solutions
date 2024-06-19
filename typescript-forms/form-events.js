'use strict';
// const $handleFocus = document.querySelector('handleFocus');
// if (!$handleFocus) throw new Error('$handleFocus does not exist');
function handleFocus(event) {
  console.log('focus event was fired');
  const eventTarget = event.target;
  console.log('eventTarget.name', eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const eventTarget = event.target;
  console.log('eventTarget.name', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log('eventTarget.name', eventTarget.name);
  console.log('eventTarget.value', eventTarget.value);
}
const $userName = document.querySelector('#user-name');
if (!$userName) throw new Error('$userName does not exist');
$userName.addEventListener('blur', handleFocus);
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('input', handleFocus);
const $userEmail = document.querySelector('#user-email');
if (!$userEmail) throw new Error('$userEmail does not exist');
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('focus', handleBlur);
$userEmail.addEventListener('input', handleBlur);
const $textarea = document.querySelector('textarea');
if (!$textarea) throw new Error('$textarea does not exist');
$textarea.addEventListener('blur', handleInput);
$textarea.addEventListener('focus', handleInput);
$textarea.addEventListener('input', handleInput);
