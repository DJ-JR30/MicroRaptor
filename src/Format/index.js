const { QLog } = require('../Logging/Logging.js');
const { RemoveCommas, AddCommas } = require('./Commas.js');




function Format(Numbers, Commas) {
  
  if(Commas == 'Auto' || Commas == null || Commas == 'undefined' || Commas == 'auto') {
    return AddCommas(Numbers);
  }else{
    if(Commas == false) {
      return RemoveCommas(Numbers);
    }else{
      if(Commas == true) {
        return AddCommas(Numbers);
      }else{
        QLog('Format-Error');
        return;
      }
    }
  }
}


module.exports = {
  Format
}

// True, false, Auto