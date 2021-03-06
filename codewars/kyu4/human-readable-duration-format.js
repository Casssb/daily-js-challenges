function formatDuration (seconds) {
    const second = Number(seconds);
    //convert seconds to yyddhhmmss
    let y = Math.floor(seconds / ((3600 * 24) * 365));
    let d = Math.floor(seconds / (3600*24));
    let h = Math.floor(seconds % (3600*24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);
    
    //make sure days dont go above 365
    d -= (365 * y);
    
    //convert number to readable string injection
    let yearDisplay =  y + (y == 1 ? " year" : " years");
    let dayDisplay = d + (d == 1 ? " day" : " days");
    let hourDisplay = h + (h == 1 ? " hour" : " hours");
    let minuteDisplay = m + (m == 1 ? " minute" : " minutes");
    let secondDisplay = s + (s == 1 ? " second" : " seconds");
    
    //use if/else loop to print full statement incl injection
    
    //first if seconds are zero
    if(seconds === 0){
     return "now"; 
    }
    //just 1 single data point
     else if(y === 0 && d === 0 && h === 0 && m === 0){
      return secondDisplay;
    }else if(y === 0 && d === 0 && h === 0 && s === 0){
      return minuteDisplay;
    }else if(y === 0 && d === 0 && m === 0 && s === 0){
      return hourDisplay;
    }else if(y === 0 && h === 0 && m === 0 && s === 0){
      return dayDisplay;
    }else if(h === 0 && d === 0 && m === 0 && s === 0){
      return yearDisplay;
    }
    //minutes and seconds
    else if(y === 0 && d === 0 && h === 0){
      return `${minuteDisplay} and ${secondDisplay}`
    }
    //hours, minutes and seconds
    else if(y === 0 && d === 0){
      return `${hourDisplay}, ${minuteDisplay} and ${secondDisplay}`
    }
    //days, hours, minutes and seconds
    else if(y === 0 && s !== 0 && h !== 0){
      return `${dayDisplay}, ${hourDisplay}, ${minuteDisplay} and ${secondDisplay}`
    }
    //hours and minutes
    else if(y === 0 && d === 0 && s === 0){
    return `${hourDisplay} and ${minuteDisplay}`
    }
    //days, hours and minutes
    else if(y === 0 && s === 0){
    return `${dayDisplay}, ${hourDisplay} and ${minuteDisplay}`
    }
    //years, days, hours and minutes
    else if(s === 0){
    return `${yearDisplay}, ${dayDisplay}, ${hourDisplay} and ${minuteDisplay}`
    }
    // hours and seconds
    else if(y === 0 && d === 0 && m === 0){
    return `${hourDisplay} and ${secondDisplay}`
    }
    //days, minutes and seconds
    else if(y === 0 && h === 0){
    return `${dayDisplay}, ${minuteDisplay} and ${secondDisplay}`
    }
    //final return inluding years, hours, minutes and seconds
    else{
      return `${yearDisplay}, ${dayDisplay}, ${hourDisplay}, ${minuteDisplay} and ${secondDisplay}`
    }
  };

/*   describe("basic tests", () => {
    Test.assertEquals(formatDuration(0), "now");
    
    Test.assertEquals(formatDuration(1), "1 second");
    Test.assertEquals(formatDuration(62), "1 minute and 2 seconds");
    Test.assertEquals(formatDuration(120), "2 minutes");
    Test.assertEquals(formatDuration(3600), "1 hour");
    Test.assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
    
    Test.assertEquals(formatDuration(15731080), "182 days, 1 hour, 44 minutes and 40 seconds");
    Test.assertEquals(formatDuration(132030240), "4 years, 68 days, 3 hours and 4 minutes");
    Test.assertEquals(formatDuration(205851834), "6 years, 192 days, 13 hours, 3 minutes and 54 seconds");
    Test.assertEquals(formatDuration(253374061), "8 years, 12 days, 13 hours, 41 minutes and 1 second");
    Test.assertEquals(formatDuration(242062374), "7 years, 246 days, 15 hours, 32 minutes and 54 seconds");
    Test.assertEquals(formatDuration(101956166), "3 years, 85 days, 1 hour, 9 minutes and 26 seconds");
    Test.assertEquals(formatDuration(33243586), "1 year, 19 days, 18 hours, 19 minutes and 46 seconds");
  });
  
  describe("random tests", () => {
    function sol(seconds) {
      if (seconds == 0) return 'now';
      function formatComponents(x) {
        var firsts = x.slice(0, -1).join(', ');
        return (firsts && firsts + ' and ') + x[x.length - 1];
      }
    
      var components = ["year", "day", "hour", "minute", "second"];
      var times = [31536000, 86400, 3600, 60, 1];
    
      return formatComponents(
        times.map((secondsByUnit, i) => {
          var value = (seconds / secondsByUnit) | 0;
          seconds %= secondsByUnit;
          return value == 0 ? '' : value + ' ' + components[i] + (value > 1 ? 's' : '');
        }).filter(Boolean));
    }
    for (let i = 0; i < 100; i++) {
      const n = Math.floor(Math.random() * 10000000);
      Test.assertEquals(formatDuration(n), sol(n));
    }
  }); */