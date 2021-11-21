const fetch = require('node-fetch');
const { hentai } = require('./Exports.js');


// let Options = {
//   Type: '4k'
// }


function NSFW(Type) {
  let EType = Type;
  if(EType == 'Hentai' || EType == 'hentai') {
    return getImage('hentai');
  }
  if(EType == 'FourK' || EType == 'fourk') {
    return;
  }
}


// https://nekobot.xyz/api/image?type=fourk

function getImage(Type) {
  
  if(Type == 'hentai'|| Type == 'Hentai') {
    let Img = hentai();
    return Img['message'];
  }
  
  
}






module.exports = {
  NSFW,
  getImage
}

