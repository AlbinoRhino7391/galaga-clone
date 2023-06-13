// Get a reference to the canvas element and its context
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// WHAT OBJECTS DO I NEED TO MAKE THE GAME
// Player spaceship properties
const playerShip = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 30,
    height: 20,
    color: "blue"
};

// Player controls

// Enemy spaceship properties

// Bullets properties

// Game state

// Event listeners for player controls


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