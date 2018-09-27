$(document).ready(function() {
  //declare variables
  var targetNumber;
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  var isGameOver = false;

  //add variables for the click eventss
  var crystalOne = $("#crystal-one");
  var crystalTwo = $("#crystal-two");
  var crystalThree = $("#crystal-three");
  var crystalFour = $("#crystal-four");

  // create array for all crystals
  var crystals = [crystalOne, crystalTwo, crystalThree, crystalFour];

  //get targetNumber using random(), generated for each new game
  function getRandomTargetNumber() {
    var randomTarget = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    return randomTarget;
  }
  console.log(getRandomTargetNumber());

  //get crystalNumber using random(), one for each crystal
  function getCrystalNumber() {
    var randomCrystal = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    return randomCrystal;
  }
  console.log(getCrystalNumber());

  // goal to match total score to the random target number
  // when match happens, log win and a "you won"
  // if total score goes over the target number, log a loss and "you lost"
  // reset game to new random target number (19-120) and total score back to zero, and each crystal gets new random number (1-12) attached to it.
  function gameStatus() {
    if (targetNumber === totalScore) {
      //alert("You Won!!!");
      isGameOver = true;
      $("#alert-holder").text("You won! You're a counting rockstar!");
      wins++;
      totalScore = 0;
      newGame();
    } else if (totalScore > targetNumber) {
      isGameOver = true;
      //alert("You Lost! Get your counting skills together.");
      $("#alert-holder").text("You lost! Get your counting skills together.");
      losses++;
      totalScore = 0;
      newGame();
    }
  }

  // to play, with each click of crystal, add that many points to total score
  function newGame() {
    isGameOver = false;
    //print initial game settings to page;
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#score").text(totalScore);
     
    //set new random target value
    targetNumber = getRandomTargetNumber();
    
    //set new random value for each crystal
    for (var i = 0; i < crystals.length; i++) {
      crystals[i].attr("data-random", getCrystalNumber());
    }
    
    // print gameNumber to html page.
    $("#target-number").text(targetNumber);
  }

  $(".crystal-images").on("click", function() {
    $("#alert-holder").empty();  
    //console.log(this, $(this))
    var number = $(this).attr("data-random");
    totalScore += parseInt(number);
    console.log(totalScore);
    $("#score").text(totalScore);
    gameStatus();
  });

  //call a new game
  newGame();
});
