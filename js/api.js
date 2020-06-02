class API {
  constructor(apikey) {
    this.apikey = apikey;
  }
  //get all coins
  async getCoinsAPI() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

    const urlGetCoins = await fetch(url);

    const coins = await urlGetCoins.json();

    return {
      coins,
    };
  }

  async getValues(coin, cryptoCoin) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}&api_key=${this.apikey}`;

    const urlConvert = await fetch(url);

    const result = await urlConvert.json();

    return {
      result,
    };
  }
}
