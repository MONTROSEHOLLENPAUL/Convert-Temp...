const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");
const rankinInput = document.querySelector("#ranklin > input");
const btn = document.querySelector(".button button");
//console.log(rankinInput);
//--------------------------------
function roundNumber(number) {
  return Math.round(number * 100) / 100;
}
//----------
/*Celcius to fahrenheit and kelvin , rankin*/
celciusInput.addEventListener("input", function () {
  let cTemp = parseFloat(celciusInput.value);
  let fTemp = cTemp * (9 / 5) + 32;
  let kTemp = cTemp + 273;
  let rTemp = cTemp * (9 / 5) + 491.67;
  /*---------------------*/
  fahrenheitInput.value = roundNumber(fTemp);
  kelvinInput.value = roundNumber(kTemp);
  rankinInput.value = roundNumber(rTemp);
});
//----------
/*fahrenheit to celcius and kelvin , rankin*/
fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = (fTemp - 32) * (5 / 9);
  let kTemp = (fTemp - 32) * (5 / 9) + 273;
  let rTemp = fTemp + 459.67;
  /*---------------------*/
  celciusInput.value = roundNumber(cTemp);
  kelvinInput.value = roundNumber(kTemp);
  rankinInput.value = roundNumber(rTemp);
});
//------------
/*kelvin to celcius and fahrenheit , rankin*/
kelvinInput.addEventListener("input", function () {
  let kTemp = parseFloat(kelvinInput.value);
  let cTemp = kTemp - 273;
  let fTemp = (kTemp - 273) * (9 / 5) + 32;
  let rTemp = (kTemp - 273) * (9 / 5) + 491.67;
  /*-------------------*/
  celciusInput.value = roundNumber(cTemp);
  fahrenheitInput.value = roundNumber(fTemp);
  rankinInput.value = roundNumber(rTemp);
});
/*rankin to kelvin and celcius , fahrenheit*/
rankinInput.addEventListener("input", function () {
  let rTemp = parseFloat(rankinInput.value);
  let cTemp = (rTemp - 491.67) / 1.79;
  let fTemp = rTemp - 459.67;
  let kTemp = (rTemp - 491.67) / 1.79;
  /*---------------------*/
  celciusInput.value = roundNumber(cTemp);
  fahrenheitInput.value = roundNumber(fTemp);
  kelvinInput.value = roundNumber(kTemp);
});
//----------------------
btn.addEventListener("click", () => {
  celciusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
  rankinInput.value = "";
});
