// set global variables and arrays
//      make array of alphabet so user can chose any letter (can only select letters)
//      make array of guessed letters that are incorrect 
//      make array filled with word bank 
var currentWord = [];
var guessesRemaining = 9;
var lettersGuessed  = [];
var wins = 0;
var losses = 0;
var ties = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wrongLetter = [];

var wordBank = ["rent", "gypsy", "hairspray", "grease", "wicked", "chicago", "cinderella", "newsies", "tommy", "fame" ];

// computer randomly selects a word -- use a for loop 
for (let i = 0; i < wordBank.length; i++) {
console.log(wordBank[i]);

}

// user types any key 
//   create onkeyup function/event

// computer searches through selected word for the user's guessed letter 
// if the letter is in the word, computer fills it in. 
//if the letter is not in the word, computer returns the letter guessed and reduced the number of guesses remaining
// rinse repeat until the user has guessed the word or runs out of guesses 
// upon win, play song 
// upon loss, alert Sorry! Press any key to try again!