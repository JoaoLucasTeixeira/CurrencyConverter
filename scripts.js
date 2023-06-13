const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");
  
  const dolarToday = 4.87;
  const euroToday = 5.25;
  const libraToday = 6.12;
  const bitcoinToday = 126460.88;

  if(currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  }
  if(currencySelect.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }
  if(currencySelect.value == "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-UK", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
  }
  if(currencySelect.value == "bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat ("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
  }
  currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)
}

function changeCurrency(){
  const currencyName = document.querySelector("#currency-name")
  const currencyImage = document.querySelector(".currency-image")

  if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/usaDolar.png"
  }
  if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }
  if(currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
  }
  if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"  
    currencyImage.src = "./assets/bitcoin.png"
  }

convertValues() 
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);


