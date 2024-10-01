const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

// Define the size of the blocks
const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;

// Define the colors for the Tetris pieces
const COLORS = [
    null,
    'cyan', // I
    'blue',  // J
    'orange', // L
    'yellow', // O
    'green', // S
    'purple', // T
    'red'     // Z
];

// Define the pieces
const PIECES = [
    [],
    [[1, 1, 1, 1]], // I
    [[2, 0, 0], [2, 2, 2]], // J
    [[0, 0, 3], [3, 3, 3]], // L
    [[4, 4], [4, 4]], // O
    [[0, 5, 5], [5, 5, 0]], // S
    [[0, 6, 0], [6, 6, 6]], // T
    [[7, 7, 0], [0, 7, 7]]  // Z
];

// Initialize game variables
let board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
let currentPiece;
let position;

// Function to draw the game board
function drawBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = COLORS[value];
                context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        });
    });
}

// Function to start the game
function startGame() {
    drawBoard();
    spawnPiece();
    // Add other game logic and controls here
}

// Function to spawn a new piece
function spawnPiece() {
    const pieceIndex = Math.floor(Math.random() * (PIECES.length - 1)) + 1;
    currentPiece = PIECES[pieceIndex];
    position = { x: Math.floor(COLS / 2) - 1, y: 0 };
}

// Start the game
startGame();
