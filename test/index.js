const { MicroRaptor } = require('../index.js');




const Main = MicroRaptor({
  Feature: 'Generate-Password',
  Options: {
    Length: 8,
    Uppercase: false,
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

