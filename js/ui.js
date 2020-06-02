/* eslint-disable strict */
class Interface {
  constructor() {
    this.init();
  }

  init() {
    this.buildSelect();
  }

  buildSelect() {
    quoter.getCoinsAPI().then((coins) => {
      const select = document.querySelector('#criptomoneda');
      for (const [key, value] of Object.entries(coins.coins.Data)) {
        const option = document.createElement('option');
        option.value = value.Symbol;
        option.appendChild(document.createTextNode(value.CoinName));
        select.appendChild(option);
      }
    });
  }

  showMsj(msj, classes) {
    const div = document.createElement('div');
    div.className = classes;
    div.appendChild(document.createTextNode(msj));

    //select msj
    const divMsj = document.querySelector('.mensajes');
    divMsj.appendChild(div);

    //show content
    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 3000);
  }

  //print result of quoter
  showResult(result, coin, cryptoCoin) {


    const coinInfo = result[cryptoCoin][coin];

    let price = coinInfo.PRICE.toFixed(2);
    let percent = coinInfo.CHANGEPCTDAY.toFixed(2);
    let now = new Date (coinInfo.LASTUPDATE * 1000).toLocaleDateString('es');

    //build template
    let templateHTML = `
    <div class="card bg-warning">
        <div class="card-body text-light">
            <h2 class="card-title">Resultado:</h2>
            <p>El Precio de ${coinInfo.FROMSYMBOL} a moneda ${coinInfo.TOSYMBOL} es de : $ ${price}</p>
            <p>Variación último día: % ${percent}</p>
            <p>Última actualización: ${now}</p>
        </div>

    </div>
    `;
    //show result
    document.querySelector('#resultado').innerHTML = templateHTML;
  }
}
