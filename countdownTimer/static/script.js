
const aSecond = 1000;
const aMin = aSecond*60;
const aHour = aMin*60;
const aDay = aHour*24;
let currenttime, nextYear, miliseconds, Day, Hour, Min, Second;

function timer(){
   currenttime = new Date();
   nextYear = new Date(currenttime.getFullYear()+1,1,1,0,0,0,0);

   miliseconds = nextYear - currenttime;
   
   Day = Math.round(miliseconds/aDay);
   Hour = Math.round((miliseconds%aDay)/aHour);
   Min = Math.round((miliseconds%aDay%aHour)/aMin);
   Second = Math.round((miliseconds%aDay%aHour%aMin)/aSecond);
   
   document.getElementById("days").innerHTML=Day;
   document.getElementById("hours").innerHTML=Hour;
   document.getElementById("minutes").innerHTML=Min;
   document.getElementById("seconds").innerHTML=Second;
}

setInterval(timer,1000);

