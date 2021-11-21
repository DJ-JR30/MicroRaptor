const { QLog } = require('../Logging/Logging.js');
const colors = require('colors');


const PackageJSON = require('../../package.json');
const Package_Version = PackageJSON['version'];


let LatestVersion = '1.0.17';
let LatestDevVersion = '1.0.17';
let Feature = `↪`;
let LatestLogMessage = `Need update avalible\n`.red + `Updates:\n\n${Feature} Package Update Notes\n`.yellow;
let HowTo = `\n\nTo update do 'npm i micro-raptor@${LatestVersion}'\n\n`.cyan;

let fi = LatestLogMessage + HowTo;



function Package() {
  
  if(Package_Version == LatestVersion || Package_Version == LatestDevVersion) {
    
  }else{
    QLog('PackageVersion', fi)
  }
  
}





module.exports = {
  Package
}
