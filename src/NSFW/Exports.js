const fetch = require('node-fetch');

// Fuck (hentai)
exports.hfuck = async () => {
  let res = await fetch("https://nekos.life/api/v2/img/classic")
  return res.json();
};

// End/cum (hentai)
exports.hcum = async () => {
  let res = await fetch("https://nekos.life/api/v2/img/cum")
  return res.json();
};

// Anal (hentai)
exports.hanal = async () => {
  let res = await fetch("https://nekos.life/api/v2/img/anal")
  return res.json();
};

// Lewd img (hentai)
exports.hlewd = async () => {
  let res = await fetch("https://nekos.life/api/v2/img/lewd")
  return res.json();
};

// Hentai GIF
exports.hgif = async () => {
  let res = await fetch("https://nekos.life/api/v2/img/Random_hentai_gif")
  return res.json();
};






exports.hentai = async () => {
  let res = await fetch("https://nekobot.xyz/api/image?type=hentai");
  return res.json();
}


