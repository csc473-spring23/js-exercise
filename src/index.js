const buildUrl = (fromCurrency, toCurrency) =>
  `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}/${toCurrency}.json`;

/**
 * Submit handler for the input form.
 *
 * @param {Event} ev (the event)
 */
function submitHandler(ev) {
  // make sure we suppress the form submission
  ev.preventDefault();
  // fetch the inputs
  let from = document.getElementById("from-currency").value.toLowerCase();
  let to = document.getElementById("to-currency").value.toLowerCase();
  console.log(`From ${from} to ${to}`);
  getExchangeRate(from, to);
}

function getExchangeRate(fromCurrency, toCurrency) {
  const url = buildUrl(fromCurrency, toCurrency);
  fetch(url).then((resp) => displayResult(fromCurrency, toCurrency, resp));
}

/**
 * Parse the result and display it.
 *
 * @param {string} fromCurrency
 * @param {string} toCurrency
 * @param {Response} response
 */
function displayResult(fromCurrency, toCurrency, response) {
  return response.json().then((data) => {
    let date = data.date; //shorthand for data["date"]
    let exchangeRate = data[toCurrency];
    injectRateSentence(fromCurrency, toCurrency, exchangeRate, date);
  });
}

/**
 *
 * @param {string} fromCurrency
 * @param {string} toCurrency
 * @param {number} exchangeRate
 * @param {string} date
 */
function injectRateSentence(fromCurrency, toCurrency, exchangeRate, date) {
  let sentence = `1 ${fromCurrency} is ${exchangeRate} ${toCurrency} on ${date}.`;
  // find our div and populate the sentence
  let targetDiv = document.getElementById("rate");
  let p = document.createElement("p");
  p.append(sentence);
  targetDiv.appendChild(p);
}

(function () {
  // attach a click handler to the submit button
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", submitHandler);
})();
