let currencyMap = undefined;

// let's load the currency map as our JS loads
fetch(
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json"
).then((resp) => {
  resp.json().then((body) => {
    currencyMap = body;
    console.log(currencyMap);
  });
});

export function validateCurrency(currency) {
  return currencyMap[currency.toLowerCase()] !== undefined;
}
