



// Create an array of words for the hangman game 
const word = ["Stark", "Lannister", "Tully", "Greyjoy", "Martell", "Tyrell", "Baratheon", "Targaryen"];

// Randomize word choice
let	randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let underScore = [];

//DOM manipulation
let docUnderScore = document.getElementsByClassName("game-section")
let docRightGuess = document.getElementsByClassName("letters-buttons")
let docWrongGuess = document.getElementsByClassName("wrong-letters-chosen")


// Create underscores based on length of words
let generateUnderscore = () => {
	for(let i = 0; i < choosenWord.length; i++) {
		underScore.push("_")
	}
	return underScore
}

// Create an event listener for user letter guess
document .addEventListener("keypress", (event) => {
	let keyword = String.fromCharCode(event.keyCode);

// Check if that guess is correct
	if(choosenWord.indexOf(keyword) > -1) {

// If correct push to correct word array
		rightword.push(keyword);

//replace underscore with right letter
		underScore[choosenWord.indexof(keyword)] = keyword;
		
//Checks to see if user word matches guesses
		if(underScore.join(" ") == choosenWord) {
			alert("You win");

		}
	}
	else {
		wrongWord.push(keyword);
		
	}
});
// If incorrect push to incorrect word array

// If too many guesses, display game over alert


