//declare variables 
var targetNumber;
var totalScore = 0;
var wins = 0;
var losses = 0;
//for each crystal image?
//var crystalOne;
//var crystalTwo;
//var crystalThree;
//var crystalFour;

//add variables for the click events
var crystalOne = $("#crystal-one");
var crystalTwo = $("#crystal-two");
var crystalThree = $("#crystal-three");
var crystalFour = $("#crystal-four");

// create array for all crystals
var crystals = [crystalOne, crystalTwo, crystalThree, crystalFour];


//get targetNumber using random(), generated for each new game
function getRandomTargetNumber() { 
	randomTarget = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
	
    return randomTarget;
};
console.log(getRandomTargetNumber());

//get crystalNumber using random(), one for each crystal
function getCrystalNumber() {
	randomCrystal =  (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
	
    return randomCrystal;
};
console.log(getCrystalNumber());


// goal to match total score to the random target number
// when match happens, log win and a "you won"
// if total score goes over the target number, log a loss and "you lost"
// reset game to new random target number (19-120) and total score back to zero, and each crystal gets new random number (1-12) attached to it.
function gameStatus() {
	if (targetNumber === totalScore){
        alert("You Won!!!"); 
        $("<div>").text("You won!"); // will this write to the DOM?
		wins++;
		totalScore = 0;	
		newGame();
	
	}else if(totalScore > gameNumber) {
		alert("You lost! Get your counting skills together."); // how write this to the DOM?
		losses++;
		totalScore = 0;
		newGame();
		
	}
}

// to play, with each click of crystal, add that many points to total score
function newGame() {	
$(document).ready(function (){

	//print initial game settings to page;
	$("#wins").text(wins);
	$("#losses").text(losses); 
    $("#total_score").text(totalScore);
    //$(.crystal-images).empty(); // needed step to clear previous random values?
	
	//set new random target value
    targetNumber = getRandomTargetNumber();
    //set new random crystal values to each distinct crystal image
    //var crystalOne = getCrystalNumber();
	//var crystalTwo = 0;
	//var crystalThree = 0;
    //var crystalFour = 0;
    
    for (var i = 0; i < crystals.length; i++){
        getCrystalNumber();
        crystals[i].attr({ //could I use this here?
            "data-random":random
        });    
    }


	// print gameNumber to html page.
	 $("#target-number").text(targetNumber);
	
	// console logging to see crystal values until game development is complete.
	console.log(`this is the current game's crystal values: (${crystalOne}, ${crystalTwo}, ${crystalThree}, ${crystalFour})`);
	
	
	$("#total_score").text(totalScore);
	
	
	//});
});
//call a new game
newGame();