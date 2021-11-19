const { toFarenheit, toCelsius } = require('./Tempature.js');
const { QLog } = require('../Logging/Logging.js');




function Tempature(Tempature, ConvertTo) {
  
  if(ConvertTo == 'undefined' || ConvertTo == null) {
    QLog('Tempature-ConvertTo-Undefined');
    return;
  }
  
  
  if(ConvertTo == 'c' || ConvertTo == 'C' || ConvertTo == 'celsius' || ConvertTo == 'Celsius') {
    
    return toCelsius(Tempature);
    
  }else{
    if(ConvertTo == 'f' || ConvertTo == 'F' || ConvertTo == 'farenheit' || ConvertTo == 'Farenheit') {
      
      return toFarenheit(Tempature);
      
    }else{
      QLog('Tempature-ConvertTo-Undefined');
    }
  }
  
  
}


module.exports = {
  Tempature
}


