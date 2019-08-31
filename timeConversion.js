function timeConversion(s) {
  // 12:00:00AM => 00:00:00
  // 12:00:00PM => 12:00:00
  let timeArray = s.match(/^(\d+):(\d+):(\d+)([AP]M)$/i);
  let hours = timeArray[1];
  let minutes = timeArray[2];
  let seconds = timeArray[3];
  let amPm = timeArray[4];
  
  if (amPm.includes("PM")) {
    if (hours === "12") {
      hours = "12";
    } else {
      let pmHours = parseInt(hours, 10);
      hours = pmHours + 12;
      hours.toString(10);
    }
    
    console.log(`${hours}:${minutes}:${seconds}`);

  } else {
    if (hours === "12") {
      hours = "00";
    }
    
    console.log(`${hours}:${minutes}:${seconds}`);
  }
}

timeConversion("07:05:45PM");
timeConversion("12:05:45AM");
timeConversion("12:20:45PM");
timeConversion("01:20:45AM");