//1a. make a button appear on the page
let button = document.createElement("button");
let btnText = document.createTextNode("BUTTON TO ALERT MESSAGE");
button.appendChild(btnText);
document.body.appendChild(button);


//1b. when button is clicked, alert a nice message
button.addEventListener("click", function(){
    alert("HEY THERE!")
})

//2. When the second button is clicked, alert the content on the input field
let message = document.getElementById("inputText");
document.getElementById("btn").addEventListener("click", function() {
    alert( message.value );
});

//3a. create a div - change different background color when hovered
let test = document.getElementById("divHover");
test.addEventListener("mouseenter", function(e){
    e.target.style.backgroundColor = "purple";
})

//3b. div return to original color
let testOut = document.getElementById("divHover");
testOut.addEventListener("mouseleave", function(e){
    e.target.style.backgroundColor = "white";
})

//4. click p - color of text changes to random color
let textPara = document.getElementById("para");

let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'black'];

function getRandomColor () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}
textPara.addEventListener("click", function(){
let randomColor = getRandomColor();
textPara.style.color = randomColor;
})   

//5a.add a button and an empty div
let buttonTwo = document.createElement("button");
let btnTextTwo = document.createTextNode("BUTTON TO WRITE MY NAME");
buttonTwo.id = "btnClick"
buttonTwo.appendChild(btnTextTwo);
document.body.appendChild(buttonTwo);

let emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

//5b. when the button is clicked, add a span that contains your name to empty div
let buttonThree = document.getElementById("btnClick");
buttonThree.addEventListener("click", function(){
    let span = document.createElement("span");
    let spanText = document.createTextNode("Amanda");
    span.appendChild(spanText);
    emptyDiv.appendChild(span);
})

//6a. Create array containing names of friends 
let friends = ["Alex", "Alexandra", "Roger", "Adam", "Carolyn", "Matt", "Kim", "Amanda", "Adrianna", "Marissa", "Juliana"]

//6b. When button is clicked add each friend as an li in ul
let clickButton = document.getElementById("anotherButton");
clickButton.addEventListener("click", function(){


for (var i = 0; i < friends.length; i++){
    let listItem = document.createElement("li");
    let listName = document.createTextNode(friends[i])
    listItem.appendChild(listName);
    list.appendChild(listItem);
}

})