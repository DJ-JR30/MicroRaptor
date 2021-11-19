


function RemoveCommas(Numbers) {
  let Check = Numbers.includes(',');
  if (Check == true) {
    return Numbers.replace(/,/g, '');
  } else {
    return Numbers;
  }
}


function AddCommas(Numbers) {
  let AllNum = Numbers.split('');
  let N = AllNum;
  var b = Numbers;
  var len = b.length;
  
  
  
  if(b.includes(',') == true) {
    return b;
  }else{
  if (len == 4) {
    return `${N[0]},${N[1]}${N[2]}${N[3]}`;
  }
  if (len == 5) {
    return `${N[0]}${N[1]},${N[2]}${N[3]}${N[4]}`;
  }
  if (len == 6) {
    return `${N[0]}${N[1]}${N[2]},${N[3]}${N[4]}${N[5]}`;
  }
  if (len == 7) {
    return `${N[0]},${N[1]}${N[2]}${N[3]},${N[4]}${N[5]}${N[6]}`;
  }
  if (len == 8) {
    return `${N[0]}${N[1]},${N[2]}${N[3]}${N[4]},${N[5]}${N[6]}${N[7]}`;
  }
  if (len == 9) {
    return `${N[0]}${N[1]}${N[2]},${N[3]}${N[4]}${N[5]},${N[6]}${N[7]}${N[8]}`;
  }
  }
}






module.exports = {
  RemoveCommas,
  AddCommas
}

