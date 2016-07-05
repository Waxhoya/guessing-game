var userName;
function meetAJ () {
	if (!userName) {
		var userName = prompt("What is your name?");
	}
}

function myHistory() {
	if (!userName) {
		var userName = prompt("What is your name?");
	}

	var guess1 = prompt("The Portland Timbers are playing against Seattle Sounders: Do you fake food poisoning to get out of work and go?: ","yes/no");
	if (guess1 == "yes") {
		alert("Of Course! Good spirit! Those fish tacos last night looked kinda sketchy.");
		var score = 1;
	} else {
		alert("You've mispelled yes. Zero Points.");
		var score = 0;
	}

	var guess2 = prompt("So far your score is: "+score+" . Your next questions is tricky: Your SCUBA diving in the pacific and notice an group of oysters herd headed towards the beach, Do you dry off and collect them later that day?","yes/no");
	if (guess2 == "yes") {
		score += 1;
		alert(score+" total point(s)! The oysters make a delicious chowder and you feast like kings. Are you ready for the next question?");
	} else {
		alert("The oysters die in fits of suicidal rage in the sun baked heat. No points.")
	}

	var guess3 = prompt("You go to buy a new computer and are shocked to see what overpriced swill they offer you. Do you take on building a new computer from scratch?","yes/no");
	if (guess3 == "yes") {
		alert('You laugh like a mad-man at the salesmans utter incompetance. Amazon and Newegg have parts to you in 24 hours. It takes a pitance of time before your new hashtacular pixel crushing machine is running. Its soo good you fall asleep with the HR googles on and do a full days work before realize you loaded "Code Monkey VR experience" and have been in you room all day... 2 POINTS!');
	score += 2;
	} else {
		alert('I think Walmart has a special around black friday. No points')
	}

	alert("You did well to finish "+userName+" your final score was: "+score);
}
