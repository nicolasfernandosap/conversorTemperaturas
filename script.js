const formulario = document.querySelector(".temperatura-form");
formulario.addEventListener("click", (e) => e.preventDefault());

const botaoConverter = document.querySelector("#btn-conversor");
botaoConverter.addEventListener("click", converterTemperatura);

const tempParagraph = document.createElement("p");
formulario.appendChild(tempParagraph);



function converterTemperatura() {
  const temperaturaDigitada = document.querySelector("#temperatura");
  const primeiraTemperatura = document.querySelector("#primeira-temperatura");
  const segundaTemperatura = document.querySelector("#segunda-temperatura");

//Celsius para .......
  if (
    primeiraTemperatura.value == "celsius" &&  segundaTemperatura.value == "fahrenheit") {
    const celsiusfahrenheit = temperaturaDigitada.value * 1.8 + 32;
    tempParagraph.textContent = `A temperatura de Celsius para Fahrenheit é: ${celsiusfahrenheit}`;
  } 

  
else if(primeiraTemperatura.value == "celsius" && segundaTemperatura.value =="kelvin"){
      const celsiuskelvin =  parseInt(temperaturaDigitada.value) + 273.15 ;
      tempParagraph.textContent = `A temperatura de celcius para kelvin é: ${celsiuskelvin}`;
}
else if(primeiraTemperatura.value == "celsius" && segundaTemperatura.value =="rankine"){
  const celsiusrankine =  temperaturaDigitada.value * 9/5 + 491.67;
  tempParagraph.textContent = `A temperatura de celcius para rankine é: ${celsiusrankine}`;
}

//Faherenheit para ......
else if(primeiraTemperatura.value == "fahrenheit" && segundaTemperatura.value =="kelvin"){
  const fahrenheitkelvin =  (temperaturaDigitada.value - 32) * 5/9 + 273.15;
  tempParagraph.textContent = `A temperatura de fahrenheit para kelvin é: ${fahrenheitkelvin}`;
}

else if (
  primeiraTemperatura.value == "fahrenheit" &&  segundaTemperatura.value == "celsius") {
  const fahrenheitcelsius = (temperaturaDigitada.value - 32) / 1.8;
  tempParagraph.textContent = `A temperatura de Fahrenheit para Celsius é: ${fahrenheitcelsius}`;
}

else if (
  primeiraTemperatura.value == "fahrenheit" &&  segundaTemperatura.value == "rankine") {
  const fahrenheitrankine = parseInt(temperaturaDigitada.value) + 459.67;
  tempParagraph.textContent = `A temperatura de Fahrenheit para rankine é: ${fahrenheitrankine}`;
}

//Kelvin para .....
else if (
  primeiraTemperatura.value == "kelvin" &&  segundaTemperatura.value == "celsius") {
  const kelvincelsius = (temperaturaDigitada.value - 273.15);
  tempParagraph.textContent = `A temperatura de Kelvin  para Celsius é: ${kelvincelsius}`;
}
else if (
  primeiraTemperatura.value == "kelvin" &&  segundaTemperatura.value == "fahrenheit") {
  const kelvinfahrenheit = (temperaturaDigitada.value - 273.15) * 9/5 + 32;
  tempParagraph.textContent = `A temperatura de Kelvin para fahrenheit é: ${kelvinfahrenheit}`;
}
else if (
  primeiraTemperatura.value == "kelvin" &&  segundaTemperatura.value == "rankine") {
  const kelvinrankine = temperaturaDigitada.value *1.8;
  tempParagraph.textContent = `A temperatura de Kelvin para Rankine é: ${kelvinrankine}`;
}

//Rankine para.....
else if (
  primeiraTemperatura.value == "rankine" &&  segundaTemperatura.value == "celsius") {
  const rankinecelsius = (temperaturaDigitada.value - 491.67 )* 5/9;
  tempParagraph.textContent = `A temperatura de Rankine para celsius é: ${rankinecelsius}`;
}
else if (
  primeiraTemperatura.value == "rankine" &&  segundaTemperatura.value == "fahrenheit") {
  const rankinefahrenheit = temperaturaDigitada.value - 459.67;
  tempParagraph.textContent = `A temperatura de Rankine para Fahrenheit é: ${rankinefahrenheit}`;
}
else if (
  primeiraTemperatura.value == "rankine" &&  segundaTemperatura.value == "kelvin") {
  const rankinekelvin = temperaturaDigitada.value * 5/9;
  tempParagraph.textContent = `A temperatura de Rankine para Kelvin é: ${rankinekelvin}`;
}



}