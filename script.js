let guessWord = document.getElementById("guessWord");
    guessWord.style.display = "none";
    let firstPage = document.getElementById("firstPage");
    let lettersPara = document.getElementById("lettersPara");
    let attempts = 6;

function submitWord() {
    guessWord.style.display = "initial";
    let submitPage = document.getElementById("submitPage");
    submitPage.style.display = "none";
    let input = document.getElementById("userInput").value;  
    lettersPara.innerHTML = input.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '_ ');
    let letters = '', letter;
    for (let i = 97; i <= 122; i++) {
        letter = String.fromCharCode(i);
        letters += '<button onclick="setLetter(\'' + letter + '\');">' + letter + '</button>';
    }
    document.getElementById('alphabet').innerHTML = letters;  
    document.getElementById('tryes').innerHTML = "Last Letters: ";
}

let setLetter = function(selectedLetter) {
    let input = document.getElementById("userInput").value;
    document.getElementById('tryes').innerHTML += selectedLetter + " ";
    let lettersParaCopy = lettersPara.innerHTML;
    let newLettersPara = '', counter = 0, result = '';
    for (let i = 0; i < input.length; ++i) {
        if (selectedLetter === input[i]) {
            newLettersPara += selectedLetter + " ";
            result += selectedLetter;
            counter = 1;
        } else {
            newLettersPara += lettersParaCopy[i * 2] + " ";
            result += lettersParaCopy[i * 2];
        }
    }
    if (counter < 1) {
        --attempts;
    }
    if (attempts === 0) {
        alert("You lost!");
        firstPage.style.display = "none";
        guessWord.style.display = "none";
        restartButton();
    } else if (input === result) {
        alert("You win!");
        firstPage.style.display = "none";
        guessWord.style.display = "none";
        restartButton();
    }
    lettersPara.innerHTML = newLettersPara;
    document.getElementById("remainingTryes").innerHTML = "You have " + attempts + " attempts";
};

    function restartButton() {
        const restartButton= document.createElement('button');
        restartButton.innerText= "Restart the game";
        restartButton.className = "button";
        document.body.appendChild(restartButton);
        restartButton.addEventListener("click", function() {
            location.reload();
        });
    }

function guessButton() {
    let guessButton = document.getElementById("guessInput").value;
    let guessInput = document.getElementById(guessWord);
    let input = document.getElementById("userInput").value;
    if (guessButton === input) {
        alert("You win!");
        firstPage.style.display = "none";
        guessWord.style.display = "none";
        restartButton();
    } else {
        alert("You are wrong!");
        --attempts;
        document.getElementById("remainingTryes").innerHTML = "You have " + attempts + " attempts";
        if (attempts === 0) {
            alert("You lost!");
            firstPage.style.display = "none";
            restartButton();
            guessWord.style.display = "none";
        }
    }
}
    
    
