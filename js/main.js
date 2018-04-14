var questions = [
	{
		question: "Who owns the overall Major League Baseball homerun record? ",
		answer: "Barry Bonds"
	},
	{
		question: "Who is the  National Basketball Association all time scoring leader",
		answer: "Kareem Abdul-jabar"
	},
	{
		question:"Which team won the Superbowl in 1985?",
		answer: "San Fransisco 49ers"
	},
	{
		question:"Who was rookie of the year in the American League in 1996?",
		answer:"Derek Jeter"
	},
	{
		question:"Which NBA team has the season win record?",
		answer:"Golden State Warriors"
	},
	{
		question:"which city did the Lakers represent before Los Angeles?",
		answer:"Minneapolis"
	},
	{
		question:"Who was NBA rookie of the year in 1985?",
		answer:"Michael Jordan"
	},
	{
		question:"Who owns the NFL overall touchdown catch record?",
		answer:"Jerry Rice"
	},
	{	
		question:"Who was the NBA most valuable player in 2008?",
		answer:"Kobe Bryant"
	},
	{
		question:"Who is the all time FIFA World Cup goal scorer?",
		answer:"Miroslav Klose"
	}

];

//loop through each question

for (var i = 0; i < questions.length; i++) {
	questions[i];
	//store each questions value
	var question = questions[i].question;
	//store each element to add question to
	var el = document.getElementById('question' + [i]);

	//check what questions and element is being created
	console.log(question,el);
	//update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz

function testResults() {
//store variable to udate correct and incorrect totals
var correct = 0;
var incorrect = 0;

// loop through question array 
	for(var i = 0; i < questions.length; i++) {
		//store each correct answer
		var answer = questions[i].answer.toLowerCase();
		//store each user answer 
		var guess = document.getElementById('answer' + [i]).value.toLowerCase();
		//store elementto add a class if correct or incorrect
		var questionSpot = 	document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on 	questionSpot
			questionSpot.className = 'correct';
			//add one to correct 
			correct++;
		} else {
			//update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to correct 
			incorrect++;
		};
	};
	// update correct and incorrect values 
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}