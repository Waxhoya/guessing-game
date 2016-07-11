/* comparinator will index input to the first letter and convert to lower case*/

function compareENator(userInput) {
	userInput == userInput.toLowerCase();
	return userInput.charAt(0);
}

function getTrivia() {
	msg="";
	for (var index = 0; index < triviaBox.length; index++){
		var answer = prompt("Question "+(index + 1)+". "+triviaBox[index].question+"\n  Yes/No");
		console.log("Answer: "+answer+"| Trivia Q: "+triviaBox[index].question)
		if (compareENator(answer) == triviaBox[index].ans) {
			alert("Holey Rusted Metal Batman, You are Correct");
			msg += "<p class='success'>You are Correct! You got number "+index+" right."
			document.getElementById('resp').innerHTML = msg;
		} else {
			alert("No, Thats not correct");
			msg += "<p class='failure'>You are Incorrect! You got number "+index+" wrong."
			document.getElementById('resp').innerHTML = msg;
		}
	}
}


var triviaBox = [
	{question: "Soccer is your favorite sport", ans: "y"},
	{question: "Did I join the Marines, Army, or Navy", ans: "m"},
	{question: "I was born in Oregon, Pennsylvania, or California", ans: "c"},
	{question: "I prefer Hiking over Biking", ans: "y"},
	{question: "I prefer to take Trains over Airplanes", ans: "n"},
	{question: "I am allergic to bees", ans: "n"},
];
