const { QLog } = require('../Logging/Logging.js');
const { Generate_Password } = require('./GeneratorPassword.js');
const { GeneratorUUID } = require('./UUID.js'); 






function Gen_Password(Data) {
  
  let Options = Data['Options'];
  let ELength;
  let EUppercase;
  let ELowercase;
  let ENumbers;
  let ESymbols;
  
  if (Options == 'undefined' || Options == null) {
    Options = {
      Length: 8,
      Uppercase: false,
      Lowercase: false,
      Numbers: false,
      Symbols: false
    }
  }
  
  
  if (Options['Length'] == 'undefined' || Options['Length'] == null) {
    Options['Length'] = 8;
    ELength = Options['Length'];
  } else {
    ELength = Options['Length'];
  }
  if (Options['Uppercase'] == 'undefined' || Options['Uppercase'] == null) {
    Options['Uppercase'] = false;
    EUppercase = Options['Uppercase'];
  } else {
    EUppercase = Options['Uppercase'];
  }
  if (Options['Lowercase'] == 'undefined' || Options['Lowercase'] == null) {
    Options['Lowercase'] = false;
    ELowercase = Options['Lowercase'];
  } else {
    ELowercase = Options['Lowercase'];
  }
  if (Options['Numbers'] == 'undefined' || Options['Numbers'] == null) {
    Options['Numbers'] = false;
    ENumbers = Options['Numbers'];
  } else {
    ENumbers = Options['Numbers'];
  }
  if (Options['Symbols'] == 'undefined' || Options['Symbols'] == null) {
    Options['Symbols'] = false;
    ESymbols = Options['Symbols'];
  } else {
    ESymbols = Options['Symbols']
  }
  
  
  
  z = Generate_Password(ELength, EUppercase, ELowercase, ENumbers, ESymbols);
  if (z == 'undefined' || z == null) {
    QLog('Generator-Password');
    return;
  } else {
    return z;
  }
  
}


function Gen_uuid(Data) {
  let Options = Data['Options'];
    let EType;
    
    if(Options == 'undefined' || Options == null) {
      Options = {
        Type: 4
      }
    }
    
    
    if (Options['Type'] == 'undefined' || Options['Type'] == null) {
      Options['Type'] = 4;
      EType = Options['Type'];
    } else {
      EType = Options['Type'];
    }
    
    if(EType == 4) {
      return GeneratorUUID(4);
    }
    
    
}





module.exports = {
  Gen_Password,
  Gen_uuid
}

