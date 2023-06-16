// Get a reference to the canvas element and its context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// WHAT OBJECTS DO I NEED TO MAKE THE GAME
// Player spaceship properties
const player = {
    x: 0, // X-coordinate of the player spaceship
    y: 0, // Y-coordinate of the player spaceship
    speed: 3, // Speed of the player spaceship
    width: 50, // Width of the player spaceship
    height: 50 // Height of the player spaceship
};

// Player controls
const controls = {
    left: false, // Is the left arrow key pressed?
    right: false, // Is the right arrow key pressed?
    space: false // Is the spacebar pressed?
};

class Enemy {
  constructor(x, y, speed, width, height) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.width = width;
      this.height = height;
  }

  draw() {
      ctx.fillStyle = "#ff0000";
      ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
      this.y += this.speed;
  }
}

// Enemy spaceship properties
const enemies = []; // Array to store enemy spaceships

// Bullets properties
const bullets = [];

// Game state
let gameRunning = true;

// Event listeners for player controls
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      controls.left = true;
    } else if (event.key === "ArrowRight") {
      controls.right = true;
    } else if (event.key === " ") {
      controls.space = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowLeft") {
      controls.left = false;
    } else if (event.key === "ArrowRight") {
      controls.right = false;
    } else if (event.key === " ") {
      controls.space = false;
    }
});

// HOW WILL THE GAME WORK
// Initialize the game
function initializeGame() {
  // Initialize player spaceship position
  player.x = canvas.width / 2 - player.width / 2; // Set player spaceship to the center horizontally
  player.y = canvas.height - player.height - 10; // Set player spaceship near the bottom vertically
  
  // Reset game state
  gameRunning = true;
  
  // Generate enemy spaceships
  generateEnemies();

  // Start the game loop
  gameLoop();
}

// Generate enemy spaceships
function generateEnemies() {
  const enemyCount = 5; // Number of enemies to generate

  for (let i = 0; i < enemyCount; i++) {
    const newEnemy = new Enemy(
      Math.random() * (canvas.width - 40),
      Math.random() * (canvas.height / 2),
      1,
      40,
      40
    );

    enemies.push(newEnemy);
  }
}

// Game loop
function gameLoop(){
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player spaceship
  drawPlayer();

  // Draw the enemy spaceships
  drawEnemies();

  // Move the player spaceship
  movePlayer();

  // Spawn bullets

  // Move the bullets
  moveBullets();

  // Detect collisions between bullets and enemies
  detectCollisions();

  // Update the scoreboard
  //updateScoreboard();

  // Request next frame
  requestAnimationFrame(gameLoop);
}

// Draw the player spaceship
function drawPlayer() {
  ctx.fillStyle = "#0000ff"; // Set the color of the player spaceship
  ctx.fillRect(player.x, player.y, player.width, player.height); // Draw the player spaceship rectangle
}

// Draw the enemy spaceships
function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i];
      enemy.draw();
  }
}

// Move the player spaceship
function movePlayer() {
  if (controls.left) {
    // Move left
    player.x -= player.speed;
  } else if (controls.right) {
    // Move right
    player.x += player.speed;
  }

  // Limit the player spaceship within the canvas bounds
  if (player.x < 0) {
    player.x = 0;
  } else if (player.x + player.width > canvas.width) {
    player.x = canvas.width - player.width;
  }
}

// Shoot a bullet
function shootBullet() {
 
} 

// Move the bullets
function moveBullets() {
 
}

// Draw the bullets
function drawBullets() {
    
}

// Detect collisions between bullets and enemies
function detectCollisions() {
  
}

// Check if two objects are colliding
function isCollision(obj1, obj2) {
 
}

// Start the game
initializeGame();
gameLoop();