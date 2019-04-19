// create an array of charaters for user to guess
// found a way to split a string into an array of sub-strings
const letterChoice = "abcdefghijklmnopqrstuvwxyz".split("");
const wordChoices = ["barbados","colombia","cameroon","portugal","thailand"]

// define keeping score variables
let wins = 0;
let losses = 0;
let guessLeft = 10;
let currentWord = "";
const guessSoFar = [];

// variables for displaying to DOM

// Randomly chooses a choice from the options array. This is the Computer's guess.
let magicWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
const magicWordsplit = magicWord.split("");
console.log(magicWord);
console.log(magicWordsplit);

// clear guesses so far function
function clearArray() {
  //empty your array
  guessSoFar.length = 0;
}
// generates new letter
function generateNewWord() {
  magicWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

// array to show how many letters in the word
const answerArray =[];


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  const userGuess = event.key;
  const magicWordsplit = magicWord.split("");
  const repeatGuess = guessSoFar.includes(userGuess);
  const validGuess = letterChoice.includes(userGuess);

  
  for (let i=0; i < magicWordsplit.length; i++) {
    let letterLoop = (magicWordsplit[i]);
    if (userGuess === letterLoop) {
      console.log("you guess a letter right");
    }
  }
  // game logic
  if (guessLeft > 0 && magicWordsplit.includes(userGuess)) {
    console.log("you guessed right");
    // wins++;
    // guessLeft = 10;
    // clearArray();
    // generateNewLettter();
    // document.querySelector("#message").textContent = rightGuess;
  } else if (guessLeft > 0 && repeatGuess === false && validGuess === true) {
    guessLeft--;
    guessSoFar.push(userGuess);
    document.querySelector("#message").textContent = wrongGuess;
  } else if (guessLeft === 0) {
    losses++;
    guessLeft = 10;
    clearArray();
    generateNewLettter();
    document.querySelector("#message").textContent = outOfGuesses;
  }
}