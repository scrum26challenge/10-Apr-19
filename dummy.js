const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector('#name');
const number = document.querySelector('#number');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  msg.classList.add('error');
  msg.innerHTML = `Meeting Name :${nameInput.value} <br>Timer : ${number.value} seconds <br> Next Meeting Phase : Code`
  }
