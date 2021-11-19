








function toCelsius(Farenheit) {
  return (Farenheit - 32) * (5/9);
}


function toFarenheit(Celsius) {
  return (Celsius * 9/5) +32;
}





module.exports = {
  toFarenheit,
  toCelsius
}

