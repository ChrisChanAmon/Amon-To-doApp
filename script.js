// Select the dom
let btn = document.getElementById("btn");

// Add Events
btn.addEventListener("click", createToDo);

// Create Functions
function createToDo(){
    // Select The Dom
    let userInput = document.getElementById("userInput");
    let list = document.getElementById("unorder-list");

    // Create HTML Element
    let li = document.createElement("li");
    let span = document.createElement("span");

    // Add class to HTML elements
    li.className = "task";
    span.className = "delete";

    // Add Content to element
    li.textContent = userInput.value;
    span.textContent = "X";

    // Append Child
    li.appendChild(span);
    list.appendChild(li);

    // Add Events
    span.addEventListener("click", deleteItem);

    // Add Function
    function deleteItem(){
        li.remove();

        // Add sound effect for delete button
        let deleteSound = new Audio("trashbin.mp3");
        deleteSound.play();
    }

    // Add sound
    let createSound = new Audio("magical.mp3");
    createSound.play();
}