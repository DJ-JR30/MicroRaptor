


function DateTime(Version=Normal) {
  
  if(Version == 'Normal' || Version == 'normal') {
    return getTime();
  }
  
  if(Version == 'Timestamp' || Version == 'timestamp') {
    let d = getTime();
    
    let text = `${d[1]} ${d[3]}, ${d[4]} - ${d[5]}:${d[6]} ${d[7]}`;
    
    
    return text;
  }
  
  if(Version == 'Custom' || Version == 'custom') {
    return getTime();
  }
  
}

function getTime() {
  let AmPm;
  let Months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec']
  
  const date = new Date();
  let month_num = date.getMonth() + 1;
  let month_txt = Months[month_num - 1];
  
  let date_num = date.getDate();
  let year_num = date.getFullYear();
  
  let HOURS_NUM = ['12','1','2','3','4','5','6','7','8','9','10','11','12','1','2','3','4','5','6','7','8','9','10','11'];
  let hrs = date.getHours();
  if(hrs < 11 && hrs == 0){
    AmPm = 'am';
  }else{
    if(hrs == 12) {
      AmPm = 'noon';
    }else{
      if(hrs > 12) {
        AmPm = 'pm';
      }else{
        if(hrs == 0) {
          AmPm = 'midnight';
        }
      }
    }
  }
  
  let hr = HOURS_NUM[hrs];
  let min = date.getMinutes();
  
  
  
  
  if(hr < 10) {
    hr =  `0${hr}`
  }
  if(min<10) {
    min = `0${min}`
  }
  
  
  
  let r = [date, month_txt, month_num, date_num, year_num, hr, min, AmPm];
  return r;
}




module.exports = {
  DateTime
}

