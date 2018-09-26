//declare variables 
var targetNumber;
var totalScore = 0;
var wins = 0;
var losses = 0;
//for each crystal image?


//get targetNumber using random()
function getRandomTargetNumber() { 
	randomTarget = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
	
    return randomTarget;
};
console.log(getRandomTargetNumber());

//get crystalNumber using random()
function getCrystalNumber() {
	randomCrystal =  (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	
    return randomCrystal;
};
console.log(getCrystalNumber());

// check outcome of current game.
// current problem: on multiple games, the old numbers are not being cleared, but added to the current game's total.
// 
function gameCheck() {
	if (targetNumber === totalScore){
		alert("You Won!!!");
		wins++;
		totalScore = 0;	
		gameOn();
	
	}else if(totalScore > gameNumber) {
		alert("You lost! Get your counting skills together.");
		losses++;
		totalScore = 0;
		gameOn();
		
	}
}

// main gameplay function. 
function gameOn() {	
$(document).ready(function (){

	//print initial game settings to page;
	$("#wins").text(wins);
	$("#losses").text(losses); 
	$("#total_score").text(totalScore);
	
	//set game variables to corresponding random values;
    targetNumber = getRandomTargetNumber();
    //how to assign new random number to each distinct crystal image


	// print gameNumber to html page.
	 $("#target-number").text(targetNumber);
	
	// console logging to see crystal values until game development is complete.
	console.log(`this is the current game's crystal values: (${crystalOne}, ${crystalTwo}, ${crystalThree}, ${crystalFour})`);
	
	//Go through each click event and add value to totalscore,
	// then check if there is a game ending event. 
	oneField.on("click", function() {
		totalScore += crystalOne;
		$("#total_score").text(totalScore);
		console.log(crystalOne);
		gameCheck();
		
	});

	twoField.on("click", function(){
		totalScore += crystalTwo;
		$("#total_score").text(totalScore);
		console.log(crystalTwo);
		gameCheck();
	});

	threeField.on("click", function() {
		totalScore += crystalThree;
		$("#total_score").text(totalScore);
		console.log(crystalThree);
		gameCheck();
	});

	fourField.on("click", function() {
		totalScore += crystalFour;
		$("#total_score").text(totalScore);
		console.log(crystalFour);	
		gameCheck();
	});
	$("#total_score").text(totalScore);
	
	
	});
};

gameOn();