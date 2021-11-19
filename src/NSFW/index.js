const fetch = require('node-fetch');


// let Options = {
//   Type: '4k'
// }


function NSFW(Type) {
  let EType = Type;
  if(EType == 'Anal' || EType == 'anal') {
    return getImage("https://nekobot.xyz/api/image?type=anal");
  }
  if(EType == 'FourK' || EType == 'fourk') {
    return getImage("https://nekobot.xyz/api/image?type=fourk");
  }
}




async function getImage(URL) {
  let H;
  let J;
  let R = await fetch(URL).then(json => json.JSON()).then(msg => {
    H = msg;
  })
  J = H;
  return J;
}






module.exports = {
  NSFW,
  getImage
}

