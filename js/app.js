/* eslint-disable strict */
const quoter = new API(
  'a1bcdec842ac5ac075cf4c2c59d6a8115aea2966c2c325bce6acc8f334e033cc'
);
const ui = new Interface();

quoter.getCoinsAPI();

//get form
const form = document.querySelector('#formulario');

const formValidate = (e) => {
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
    quoter.getValues(coinSelected, cryptoCoinSelected).then((data) => {
      ui.showResult(data.result.RAW, coinSelected, cryptoCoinSelected);
    });
  }
};

form.addEventListener('submit', formValidate);
