# Unit-4-Game

This game is also posted at Also posted via my portfolio: https://emadamczyk.github.io/Bootstrap-Portfolio/portfolio.html

I never attempted the Star Wars game, mainly because I couldn't relate to the premise of it. 

I am glad I finally got the functionality of functions employed for the Crystal Collector Game.
It seems to me that the logic used for the Star Wars game would be similar. 

For this Crystal Collector Game, the game generates a random target number between 19-120 for each round of play. Each of four crystals is also assigned a hidden random number which is not revealed until the player clicks the crystal. Each click adds to the player's score for that round. The player's goal is to get the total score to equal the target number. If the player's score equals the target number, the player wins that round of play; if the player's score goes over the target number, the player loses that round of play.

For this game, I initially created a bootstrap html page for the game. Then I added variables to the javascript and began mapping out the functions. The most challenging aspect of this game was writing the for loop to assign a new random number to each of the four crystals, without individually assigning a random number to each. Putting the crystals in an array and iterating over the array and using the .attr() method.

The final aspect was getting "you win" or "you lose" to print to the DOM and to then clear that text upon the start of a new game, which I did within the on click function.