const colors = require('colors');




function QLog(For, MessageImport) {
  let Error_Msg;
  let Result;
  
  let Log_Start = `[`.yellow + `Yosemite`.magenta + `]`.yellow + ` `;
  
  // If no feature set
  if(For == 'Feature') {
    Error_Msg = 'Sorry Feature has to be filled to use me else I will not know what you want todo.'.red;
    Result = Log_Start + Error_Msg;
    
    console.log(Result);
  }
  
  
  // If Generate Password Function Undefined
  if(For == 'Generator-Password') {
    Error_Msg = 'Generate Password have return a undefined or null, Sorry!'.red;
    Result = Log_Start + Error_Msg;
    
    console.log(Result);
  }
  
  if(For == 'Generator-UUID') {
    Error_Msg = 'Generate UUID have return a undefined or null, Sorry!';
    Result;
    
  }
  
  
  if(For == 'Tempature-ConvertTo-Undefined') {
    Error_Msg = 'Please set what tempature you want to convert it to.'.red;
    Result = Log_Start + Error_Msg;
    
    console.log(Result);
  }
  if(For == 'Format-Error') {
    Error_Msg = 'Sorry there was a format error!'.red;
    Result = Log_Start + Error_Msg;
    
    console.log(Result);
  }
  
  if(For == 'PackageVersion') {
    Error_Msg = MessageImport;
    Result = Log_Start + Error_Msg;
    
    console.log(Result);
  }
  
  
  
  if (For == 'Template_Log') {
    Error_Msg = ''.red;
    Result = Log_Start + Error_Msg;
    
    console.log(Result);
  }
}




module.exports = {
  QLog
}

