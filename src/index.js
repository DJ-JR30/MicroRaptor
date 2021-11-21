const { QLog } = require('./Logging/Logging.js');
const { Gen_Password, Gen_uuid } = require('./Generator/index.js');
const { DateTime } = require('./Times/dateTime.js');
const { NSFW } = require('./NSFW/index.js');
const { Tempature } = require('./Common/index.js');

const { Format } = require('./Format/index.js');

const AuthorCreate = require('./AuthorCreated/index.js');


// Package
const { Package } = require('./Package/index.js');






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



function MicroRaptor(Data, UpToDate) {
  let z;
  
  let Feature = Data['Feature'];
  if(UpToDate == 'undefined' || UpToDate == null) {
    UpToDate = false;
  }
  
  if(UpToDate == true) {
    UpToDate = false;
    // Package();
  }else{
    UpToDate = false;
  }
  
  
  
  if(Feature == 'undefined') {
    QLog('Feature');
    return;
  }
  
  
  if(Feature == 'Generate-Password' || Feature == 'generate-password') {
    return Gen_Password(Data);
  }
  
  
  if(Feature == 'Generate-UUID' || Feature == 'generate-uuid') {
    return Gen_uuid(Data);
  }
  
  
  if(Feature == 'Convert-Tempature' || Feature == 'convert-tempature') {
    let Options = Data['Options'];
    let T = Options['Tempature'];
    let CT = Options['ConversionTo'];
    return Tempature(T,CT);
  }
  
  if(Feature == 'Format-Commas' || Feature == 'format-commas') {
    let Options = Data['Options'];
    let Numbers = Options['Numbers'];
    let Commas = Options['Commas'];
    
    return Format(Numbers, Commas);
  }
  
  if(Feature == 'Date-Time' || Feature == 'date-time') {
    let Options = Data['Options'];
    
    return DateTime();
  }
  
  if(Feature == 'GodSafeIds' || Feature == 'godsafeids') {
    return AuthorCreate.GodsSafeIds();
  }
  
  if(Feature == 'NSFW' || Featute == 'nsfw') {
    let Options = Data['Options'];
    if(Options == 'undefined' || Options == null){
      Options = {
        Taste: 'hanal'
      }
    }
    return NSFW(Options['Taste']);
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

