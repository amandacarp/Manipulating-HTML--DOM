//make a button appear on the page
let button = document.createElement("button");
let btnText = document.createTextNode("CLICK ME");
button.appendChild(btnText);
document.body.appendChild(button);

button.addEventListener("click", function(){
    alert("HEY THERE!")
})