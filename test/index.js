const { Yosemite } = require('../index.js');




const Main = Yosemite({
  Feature: 'Generator-Password',
  Options: {
    Length: 20,
    Uppercase: true,
    Lowercase: true,
    Numbers: true,
    Symbols: true
  }
})



// Don't show Undefined
if(Main == 'undefined' || Main == null) {
  return;
}else{
  console.log(Main);
}

