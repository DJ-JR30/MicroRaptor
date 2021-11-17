const { Yosemite } = require('../index.js');




const Main = Yosemite({
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

