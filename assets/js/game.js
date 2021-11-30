// Begin global variables
var playerName = window.prompt("What's your robot's name?");

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// End global variables

window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
        
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.prompt("Are you sure you'd like to skip?");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        if (promptFight === "fight" || promptFight === "FIGHT") {
            enemyHealth -= playerAttack;
            console.log(playerName + " attacked " + enemyName + " for " + playerAttack + " damage!");
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " now has " + enemyHealth + " HP!");
            }

            playerHealth -= enemyAttack;
            console.log(enemyName + " attacked " + playerName + " for " + enemyAttack + " damage!");
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    }
};

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(enemyNames[i]);
        } else {
            break;
        }

        endGame();
    }
};

var endGame = function() {
    if (playerHealth > 0) {
    window.alert("The game has now ended. Let's see how you did!");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();