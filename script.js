let attempts = 6;
let lettersPara = document.getElementById("lettersPara");

    // Hiding the input word and transform him in UnderScore lines
function submitWord() {
    let userInput = document.getElementById("userInput").value;
    let tries = document.getElementById("tries");
    tries.innerHTML = "You have " + attempts + " attempts left";
    generateAlphabet();
    lettersPara.innerHTML = userInput.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '_ ');
}

    // Generate alphabet with selectable buttons
function generateAlphabet() {
    let html = '';
    let c;
    for (let i = 65; 90 >= i; i++) {
        c = String.fromCharCode(i);
        html += '<button onclick="setLetter(\'' + c + '\');">' + c + '</button>';
    }
    document.getElementById('box').innerHTML = html;
    let setLetter = function(selectedLetter) {
        document.getElementById('name').innerHTML += x;
    };
}

    // After a letter has been pressed, we check the letter
function setLetter(selectedLetter) {
    let input = document.getElementById("userInput").value;
    let lettersParaCopy = lettersPara.innerHTML;
    let newLettersPara = '', counter = 0, result = '';
    let foundALetter;
    for (let i = 0; i < input.length; ++i) {
        if (selectedLetter === input[i]) {
            newLettersPara += selectedLetter + " ";
            result += selectedLetter;
            foundALetter = 1;
        } else {
            newLettersPara += lettersParaCopy[i * 2] + " ";
            result += lettersParaCopy[i * 2];
        }
    }
    lettersPara.innerHTML = newLettersPara;
    checkWinner(foundALetter, result);
}

    // We're checking to see if the word was guessed or the attempts has over
function checkWinner(foundALetter, result) {
    let userInput = document.getElementById("userInput").value;
    if (!foundALetter) {
        --attempts;
        tries.innerHTML = "You have " + attempts + " attepmts left";
    } 
    if (attempts === 0) {
        alert("Game Over");
        lettersPara.innerHTML = userInput;
        document.getElementById("box").style.display = "none";
        restartButton();
    } else if (result === userInput) {
        alert("You guessed the word! Congratulations!");
        document.getElementById("box").style.display = "none";
        restartButton();
    }
}

function restartButton() {
    const restartButton= document.createElement('button');
    restartButton.innerText= "Restart the game";
    restartButton.className = "button";
    document.body.appendChild(restartButton);
    restartButton.addEventListener("click", function() {
        location.reload();
    });
}
    
    
