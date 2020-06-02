'use strict';

const ui = new Interface();

//get form

const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //read coin
  const coinSelect = document.querySelector('#moneda');
  const coinSelected = coinSelect.options[coinSelect.selectedIndex].value;

  //read cryptocoin
  const cryptoCoinSelect = document.querySelector('#criptomoneda');
  const cryptoCoinSelected =
    cryptoCoinSelect.options[cryptoCoinSelect.selectedIndex].value;

  if (coinSelected === '' || cryptoCoinSelected === '') {
    ui.showMsj('Ambos campos son obligatorios', 'alert bg-danger text-center');
  } else {
    console.log('todo bien');
  }
});
