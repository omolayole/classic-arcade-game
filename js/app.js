// Enemies our player must avoid
var Enemy = function() {
    
    //set position for the enemy
    this.x = 0;
    this.y = 62;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.step = 101;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //if enemy has not pass boundary
    if (this.x < this.step * 5) {
        // move forward
        // increment x by speed * dt
        this.x += 200 * dt;
    } else {
        // reset pos to start
        this.x = -this.step;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// define player class
var Player = function() {

    //set the image/sprite for the player
    this.sprite = 'images/char-boy.png';

    //set the step and jump property for the player
    this.step = 101;
    this.jump = 83;

    //set specific starting location for the player
    this.startX = this.step * 2;
    this.startY = (this.jump * 5) - 20;

    //set initial location of the player
    this.x = this.startX;
    this.y = this.startY;
};

// update method
Player.prototype.update = function() {

}

// render method
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// handleInput method
Player.prototype.handleInput = function(input) {
    if (input === 'left') {
        if (this.x > 0) {
            this.x -= this.step;
        }
    } else if (input === 'up') {
        if (this.y > 0) {
            this.y -= this.jump;
        }
    } else if (input === 'right') {
        if (this.x < this.step * 4) {
            this.x += this.step;
        }
    } else if (input === 'down') {
        if (this.y < this.jump * 4) {
            this.y += this.jump;
        }
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const bug1 = new Enemy();
const allEnemies = [];
allEnemies.push(bug1);

// Place the player object in a variable called player
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
