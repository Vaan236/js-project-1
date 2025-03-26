//Toggle Menu
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

//Alert Button
const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', function() {
    alert('Hello this is an alert message.');
});

//Add Paragraph
const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function() {
    //create a new paragraph element
    const newParagraph = document.createElement('p');
    //Set its text content
    newParagraph.textContent = 'Congratulations on Learning Practical JavaScript!';
    // Append the new paragraph to the paragraph container
    paragraphContainer.appendChild(newParagraph);
});

//Add List Item
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

let counter = 0;
//increment button
incrementButton.addEventListener('click', function() {
    counter += 1;
    counterDisplay.textContent = counter;
});
//decrement button
decrementButton.addEventListener('click', function() {
    counter -= 1;
    counterDisplay.textContent = counter;
});

//Greet User
const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

function isValidName(name){
    const namePattern = /^[a-zA-Z ]{3,}$/; //regex pattern
    return namePattern.test(name);
}

greetButton.addEventListener('click', function() {

    const username = usernameInput.value.trim();

    if(username === ''){
        greetingMessage.textContent = 'Please enter your rname';
    } else if (!isValidName(username)){
        greetingMessage.textContent = 'Invalid input. Please use only letters';
    } else {
        greetingMessage.textContent = `Hello ${username}!`;
    }
});

//Reset Button
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function() {
    location.reload();
});
