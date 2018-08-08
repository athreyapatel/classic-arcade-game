// Enemies our player must avoid

// Variables applied to each of our instances go here,
// we've provided one for you to get started
// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images

class Enemy {
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = "images/enemy-bug.png";
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    update(dt) {
      // Update the enemy's position, required method for game
      // Parameter: dt, a time delta between ticks
      this.x += this.speed * dt;
      //Reset when bug reaches the end
      if (this.x > 505) {
        this.reset();
      }
  
      // Checks for collisions between the player and the enemies
      if (
        player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y
      ) {
        player.x = 200;
        player.y = 400;
      }
    }
  
    render(dt) {
      // Draw the enemy on the screen, required method for game
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  
    reset() {
      this.speed = 300 + Math.floor(Math.random() * 222);
      this.x = -200;
    }
  }
  
  //Sets player position
  let startX = 200;
  let startY = 400;
  
  // Now write your own player class
  // This class requires an update(), render() and
  // a handleInput() method.
  class Player {
    constructor(x, y) {
      this.x = startX;
      this.y = startY;
      this.sprite = "images/char-boy.png";
    }
  
    update() {
      //set x boundaries
      if (this.x < 0) {
        this.x = 0;
      } else if (this.x > 400) {
        this.x = 400;
      } else if (this.y > 400) {
        //set y boundaries
        this.y = 400;
      } else if (this.y < 0) {
        //if player reaches water
        this.reset();
      }
    }
  
    reset() {
      this.x = startX;
      this.y = startY;
    }
  
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  
    handleInput(key) {
      switch (key) {
        case "up":
          this.y -= 90;
          break;
  
        case "down":
          this.y += 90;
          break;
  
        case "left":
          this.x -= 100;
          break;
  
        case "right":
          this.x += 100;
          break;
  
        default:
          break;
      }
    }
  }
  
  // Now instantiate your objects.
  // Place all enemy objects in an array called allEnemies
  
  let allEnemies = [];
  
  // push enemies into allEnemies array, 4 enemies total
  // sets Y coordinate for each enemy to 0, 145, and 225 by using increment
  // sets X coordinate randomly
  // sets speed to a base of 50 and then randomizes each enemy
  for (let i = 0; i < 3; i++) {
    let enemyY = 65 + 80 * i;
    let enemyX = Math.floor(Math.random() * 30);
    let enemySpeed = 50 + Math.floor(Math.random() * 150);
    allEnemies.push(new Enemy(enemyX, enemyY, enemySpeed));
  }
  
  // Place the player object in a variable called player
  const player = new Player();
  // This listens for key presses and sends the keys to your
  // Player.handleInput() method. You don't need to modify this.
  document.addEventListener("keyup", function(e) {
    const allowedKeys = {
      37: "left",
      38: "up",
      39: "right",
      40: "down"
    };
  
    player.handleInput(allowedKeys[e.keyCode]);
  });
  