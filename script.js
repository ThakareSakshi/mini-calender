let calendar=document.querySelector(".calender");
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentDate=new Date();
console.log("date "+currentDate.getDate());
console.log("day ");
console.log("month"+month[currentDate.getMonth()]);
document.querySelector(".year").innerText=currentDate.getFullYear();
document.querySelector(".date").innerText=currentDate.getDate();
document.querySelector(".day").innerText=weekday[currentDate.getDay()];
document.querySelector(".month").innerText=month[currentDate.getMonth()];
