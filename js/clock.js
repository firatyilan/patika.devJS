
//#region get name
let name=prompt("İsminizi Giriniz : ");
let nameArea = document.querySelector("#myName");
nameArea.innerHTML=name;
//#endregion



//#region day name array
let date=new Date();
var days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
//#endregion



//#region print
let text = document.querySelector(".text2");
text.innerHTML= `
${date.getHours()} : 
${date.getMinutes()} : 
${date.getSeconds()}  
${days[date.getDay()]} ${text.innerHTML} `;
//#endregion


