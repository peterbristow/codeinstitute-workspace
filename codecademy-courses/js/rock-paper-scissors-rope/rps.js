var computerChoice = function() {
    var computerChoice = Math.random();
    if (computerChoice < 0.25) {
    	computerChoice = "rock";
    } else if (computerChoice < 0.50) {
    	computerChoice = "paper";
    } else if (computerChoice < 0.75) {
    	computerChoice = "scissors";
    } else {
    	computerChoice = "rope";
    }
    return computerChoice;
};

var compare = function(choice1, choice2) {
    document.write("Your choice: " + choice1 + "<br />");
    document.write("Computers choice: " + choice2 + "<br />");
    if (choice1 === choice2) {
        return startGame("The result is a tie! Have another go! ");
    } else if (choice1 === "rock") {
        if(choice2 === "scissors") {
            return "rock wins";
        } else if(choice2 === "rope") {
            return "rope wins";
        } else {
            return "paper wins";
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins";
        } else if (choice2 === "rope") {
            return "rope wins";
        } else {
            return "scissors wins";
        }
    } else if(choice1 === "scissors") {
        if(choice2 === "rock") {
            return "rock wins";
        } else if (choice2 === "rope") {
            return "scissors win";
        } else {
            return "scissors wins";
        }
    } else if(choice1 === "rope") {
        if(choice2 === "rock") {
            return "rope wins";
        } else if (choice2 === "paper") {
            return "rope win";
        } else {
            return "scissors win";
        }
    }
};

var startGame = function(message) {
    if (!message) { message = ""; }
    var userChoice = prompt(message + "Do you choose rock, paper or scissors?");
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" || userChoice === "rope") {
        return compare(userChoice, computerChoice());
    } else if (userChoice !== null && userChoice !== false) {
        this.startGame("Your choice was not valid. ");
    } else {
        return "You ended the game. Thanks for playing."
    }
};
