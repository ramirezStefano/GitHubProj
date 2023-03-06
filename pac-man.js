// Get references to the game board and Pac-Man
const gameBoard = document.getElementById('game-board');
const pacMan = document.getElementById('pac-man');

// Set Pac-Man's starting position and direction
let pacManLeft = 0;
let pacManTop = 0;
let direction = 'right';

// Move Pac-Man in the specified direction
function movePacMan() {
  switch (direction) {
    case 'right':
      pacManLeft += 10;
      break;
    case 'down':
      pacManTop += 10;
      break;
    case 'left':
      pacManLeft -= 10;
      break;
    case 'up':
      pacManTop -= 10;
      break;
  }

  // Wrap Pac-Man around the screen if he goes off the edge
  if (pacManLeft > gameBoard.offsetWidth) {
    pacManLeft = -30;
  } else if (pacManLeft < -30) {
    pacManLeft = gameBoard.offsetWidth;
  }

  if (pacManTop > gameBoard.offsetHeight) {
    pacManTop = -30;
  } else if (pacManTop < -30) {
    pacManTop = gameBoard.offsetHeight;
  }

  // Set Pac-Man's position on the screen
  pacMan.style.left = pacManLeft + 'px';
  pacMan.style.top = pacManTop + 'px';
}

// Set up event listeners for the arrow keys
document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowRight':
      direction = 'right';
      break;
    case 'ArrowDown':
      direction = 'down';
      break;
    case 'ArrowLeft':
      direction = 'left';
      break;
    case 'ArrowUp':
      direction = 'up';
      break;
  }
});

// Move Pac-Man every 100 milliseconds
setInterval(movePacMan, 100);
