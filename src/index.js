const { QLog } = require('./Logging/Logging.js');
const { Gen_Password, Gen_uuid } = require('./Generator/index.js');
const { DateTime } = require('./Times/dateTime.js');
const { NSFW } = require('./NSFW/index.js');
const { Tempature } = require('./Common/index.js');

const { Format } = require('./Format/index.js');








// let Data = {
//   Feature: 'Generator-Password',
//   Options: {
//      Length: 10,
//      Uppercase=false, 
//      Lowercase=true,
//      Numbers=false,
//      Symbols=false
//   }
// }



function MicroRaptor(Data) {
  let z;
  
  let Feature = Data['Feature'];
  
  
  
  if(Feature == 'undefined') {
    QLog('Feature');
    return;
  }
  
  
  if(Feature == 'Generate-Password') {
    return Gen_Password(Data);
  }
  
  
  if(Feature == 'Generate-UUID') {
    return Gen_uuid(Data);
  }
  
  
  if(Feature == 'Convert-Tempature') {
    let Options = Data['Options'];
    let T = Options['Tempature'];
    let CT = Options['ConversionTo'];
    return Tempature(T,CT);
  }
  
  if(Feature == 'Format-Commas') {
    let Options = Data['Options'];
    let Numbers = Options['Numbers'];
    let Commas = Options['Commas'];
    
    return Format(Numbers, Commas);
  }
  
  
}

// Feature: ''
// O: {
//     
// }





// DateTime


module.exports = {
  MicroRaptor
}

