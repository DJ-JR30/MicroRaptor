const { QLog } = require('./Logging.js');
const { Generate_Password } = require('./GeneratorPassword.js');




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



function Yosemite(Data) {
  let z;
  
  let Feature = Data['Feature'];
  
  
  if(Feature == 'undefined') {
    QLog('Feature');
    return;
  }
  
  
  if(Feature == 'Generator-Password') {
    let Options = Data['Options'];
    let ELength;
    let EUppercase;
    let ELowercase;
    let ENumbers;
    let ESymbols;
    
    if(Options == 'undefined' || Options == null) {
      Options = {
        Length: 8,
        Uppercase: false,
        Lowercase: false,
        Numbers: false,
        Symbols: false
      }
    }
    
    
    if(Options['Length'] == 'undefined' || Options['Length'] == null) {
      Options['Length'] = 8;
      ELength = Options['Length'];
    }else{
      ELength = Options['Length'];
    }
    if(Options['Uppercase'] == 'undefined' || Options['Uppercase'] == null) {
      Options['Uppercase'] = false;
      EUppercase = Options['Uppercase'];
    }else{
      EUppercase = Options['Uppercase'];
    }
    if(Options['Lowercase'] == 'undefined' || Options['Lowercase'] == null) {
      Options['Lowercase'] = false;
      ELowercase = Options['Lowercase'];
    }else{
      ELowercase = Options['Lowercase'];
    }
    if(Options['Numbers'] == 'undefined' || Options['Numbers'] == null) {
      Options['Numbers'] = false;
      ENumbers = Options['Numbers'];
    }else{
      ENumbers = Options['Numbers'];
    }
    if(Options['Symbols'] == 'undefined' || Options['Symbols'] == null) {
      Options['Symbols'] = false;
      ESymbols = Options['Symbols'];
    }else{
      ESymbols = Options['Symbols']
    }
    
    
    
    z = Generate_Password(ELength, EUppercase, ELowercase, ENumbers, ESymbols);
    if(z == 'undefined' || z == null) {
      QLog('Generator-Password');
      return;
    }else{
      return z;
    }
  }
  
  
  
  
  
}




module.exports = {
  Yosemite
}

