
var qCounter= 0; // Counts the questions for a do while loop
qArray = [
	{question: "What is my favorite sport? Basketball or Soccer?", ans: "soccer", wAns: "basketball"},
	{question: "My dog is named after a river in Oregon, Rogue or Ash river?", ans: "rogue", wAns: "ash"},
	{question: "I enjoy making my own beverages, am I make Wine or Beer?", ans: "beer", wAns: "wine"},
	{question: "Do I enjoy Fishing or Hunting?", ans: "fishing", wAns: "hunting"},
	{question: "In my spare time I have been a volunteer Fireman or Policeman", ans: "policeman", wAns: "fireman"},
];



function classFour(array) {
	var correctAns = 0;
	for (i = 0; i < qArray.length; i++){
		var guess = prompt(array[i].question);
		guess = guess.toLowerCase();
		qCounter++;
		console.log(guess);
		if (guess == array[i].ans) {
			alert("Correct! You have guessed "+correctAns+" of "+qCounter+" correctly so far");
		} else if (guess.toLowerCase == array[i].wAns) {
			alert("sorry, "+array[i].wAns+"is incorrect, You have guessed "+correctAns+" of "+qCounter+" correctly so far");
		} else {
			alert("That is incorrect, the correct answer is: "+array[i].ans+" and the incorrect answer is "+array[i].wAns+".")
		}
	}
}
