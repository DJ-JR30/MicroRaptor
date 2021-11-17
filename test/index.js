const { MicroRaptor } = require('../index.js');




const Main = MicroRaptor({
  Feature: 'Generator-UUID',
  Options: {
    Type: 4,
  }
})



// Don't show Undefined
if(Main == 'undefined' || Main == null) {
  return;
}else{
  console.log(Main);
}

