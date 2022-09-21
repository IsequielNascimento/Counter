
let add = document.querySelector("#add");
add.addEventListener("click", function () {
    let currentNumber = document.querySelector("#currentNumber");
    let result = Number(currentNumber.innerText) + 1;
    if (result<= 10) {
    currentNumber.innerText = result;
        if (result >= 0) {
        document.getElementById("currentNumber").style.color = "black";}}
  });

 
let subract = document.querySelector("#subtract");
subract.addEventListener("click", function () {
    let currentNumber = document.querySelector("#currentNumber");
    let result = Number(currentNumber.innerText) - 1;
    if (result >= -10 ) {
        currentNumber.innerText = result;
        if (result < 0) {
            document.getElementById("currentNumber").style.color = "red";}}
             
  });
  
  
console.log(add, subract);
  

