



// Create an array of words for the hangman game 
const word = ["Stark", "Lannister", "Tully", "Greyjoy", "Martell", "Tyrell", "Baratheon", "Targaryen"];

// Randomize word choice
let	randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let underScores = [];
console.log(choosenWord);


// Create underscores based on length of words
let generateUnderscore = () => {
	for(let i = 0; i < choosenWord.length; i++) {
		underScores.push("_")
	}
	return underScores
}

console.log(generateUnderscore());

// Create an event listener for user letter guess
document .addEventListener("keypress", (event) => {
	let keycode = event.keyCode;
	console.log(event)
});

// Check if that guess is correct

// If correct push to correct word array

// If incorrect push to incorrect word array

// If too many guesses, display game over alert

