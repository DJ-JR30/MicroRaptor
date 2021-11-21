const { MicroRaptor } = require('../index.js');




const Main = MicroRaptor({
  Feature: 'NSFW',
  Options: {
    Taste: 'hentai'
  }
});



// Don't show Undefined
if(Main == 'undefined' || Main == null) {
  return;
}else{
  console.log(Main);
}

