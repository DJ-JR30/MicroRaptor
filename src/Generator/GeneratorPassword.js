const randomFunc = {
  Lowercase: getRandomLower,
  Uppercase: getRandomUpper,
  Numbers: getRandomNumber,
  Symbols: getRandomSymbol
};



function Generate_Password(Length=8, Uppercase=false, Lowercase=true, Numbers=false, Symbols=false) {
  let results = '';
  
  
  const typesCount = Uppercase + Lowercase + Numbers + Symbols;
  
  
  
  const typesArr = [{Uppercase}, {Lowercase}, {Numbers}, {Symbols}].filter(item => Object.values(item)[0]);
  
  
  
  
  if(typesCount == 0) {
    return;
  }
  
  
  for(let i = 0; i < Length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      
      results += randomFunc[funcName]();
    });
  }
  
  
  let genFinal = results.slice(0, Length);
  
  
  

  return genFinal;
}





function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


function getRandomSymbol() {
  const symbols = '!@#$%&*(){}[]<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}











module.exports = {
  Generate_Password
}

