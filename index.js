function displayMessage(){
    document.getElementById("msg").innerHTML = "To view more about me click on the about section!";
}   
// get reference to button
var btn = document.getElementById("button1");

btn.addEventListener("click", displayMessage);

function displayMsg(){
    document.getElementById("msg1").innerHTML = "Thanks Submited!";
}   
// get reference to button
var btn = document.getElementById("submit");

btn.addEventListener("click", displayMsg);