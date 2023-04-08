let input = document.getElementById("number");
let check = document.querySelector(".check");
let info = document.querySelector(".info");
let attempt = document.querySelector(".attempt");
let downNum = document.querySelector(".downNum")  
let upNum = document.querySelector(".upNum")

let counter = 9;

check.addEventListener("click", ()=>{
     counter--;
     attempt.innerHTML= `Number 0f attempts: ${counter}`;
});
 
let randomNumber = Math.round(Math.random()*100);

input.addEventListener("click", ()=>{
     input.value = "";
});

input.addEventListener("keyup", ())
