console.log("Connected");
let button = document.getElementById("Calculator");
let brithyearinput = document.getElementById("brithyear");
let result = document.getElementById("result");


button.addEventListener("click" , function(){
   let brithyear = brithyearinput.value;
   if (brithyear >= 2026) {
    result.textContent = "Error";
    return;
   }
   if (brithyear ==="") {
   result.textContent = "Please enter your brith year";
    return;
   }
   let age = 2026 - brithyear;

  result.textContent = "Your Age is " + age;
})