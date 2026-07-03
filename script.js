alert("Welcome To My Portfolio Website");

console.log("Website Loaded Successfully");

document.querySelector("form")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Message Submitted Successfully!");

});