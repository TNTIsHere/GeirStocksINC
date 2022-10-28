const myHeaders = new Headers();
myHeaders.append("apikey", "GFEoU8BXRUg9n7CLfXMjrwMqeRNdqyp7");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const append = `?to=${toCurr.value}&from=${fromCurr.value}&amount=${currencyAmount}`;

fetch("https://api.apilayer.com/exchangerates_data/convert", append, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));