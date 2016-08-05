function randGame() {
	var high = 10;
	var low = 1;
	var randInt = Math.round(Math.random() * (high - low) + low);
	console.log(randInt);
		for (i=0; i<4; i++) {
			var guessMe = prompt("Lets play a guessing game. Try and guess my number, you have "+(4-i)+" guesses left. It is between "+high+" and "+low+". What do you think my number is?: ","" );
			if (guessMe == randInt) {
				alert("You totally guessed my number: " +randInt+". Way to go "+userName+"! You still have "+(i-4)+" guesses left over!");
				i +=4;
			} else if (guessMe > randInt) {
				alert("You guessed too high! Try again.");
			} else if (guessMe < randInt) {
				alert("You guessed too low! Try again.");
			} else {
				alert("I'm confused, did you enter a number? Lets try again");
			}
		}
}
