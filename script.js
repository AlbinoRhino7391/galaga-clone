// Get a reference to the canvas element and its context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// WHAT OBJECTS DO I NEED TO MAKE THE GAME
// Player spaceship properties
const player = {
    x: 0, // X-coordinate of the player spaceship
    y: 0, // Y-coordinate of the player spaceship
    speed: 5, // Speed of the player spaceship
    width: 50, // Width of the player spaceship
    height: 50 // Height of the player spaceship
};

// Player controls
const controls = {
    left: false, // Is the left arrow key pressed?
    right: false, // Is the right arrow key pressed?
    space: false // Is the spacebar pressed?
};

// Enemy spaceship properties
const enemy = {
    x: 0, // X-coordinate of the enemy spaceship
    y: 0, // Y-coordinate of the enemy spaceship
    speed: 2, // Speed of the enemy spaceship
    width: 40, // Width of the enemy spaceship
    height: 40 // Height of the enemy spaceship
};

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

// Create the enemy spaceships

// show the scoreboard


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
  updateScoreboard();

  // Request next frame
  requestAnimationFrame(gameLoop);
}

// Draw the player spaceship
function drawPlayer() {
  
}

// Draw the enemy spaceships
function drawEnemies() {
  
}

// Move the player spaceship
function movePlayer() {
 
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