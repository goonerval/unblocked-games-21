// Initialize the emulator
var gba = new GameBoyAdvance();
gba.setCanvas(document.getElementById("gbaCanvas"));

// Function to load the ROM
function loadROM(url) {
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(buffer => gba.loadROMFromFile(buffer));
}

// Start the emulator
function startGame() {
    gba.runStable();
}

// Handle keyboard input
document.addEventListener("keydown", function(event) {
    gba.keyDown(event.keyCode);
});

document.addEventListener("keyup", function(event) {
    gba.keyUp(event.keyCode);
});

// Save and load game states
function saveGame() {
    localStorage.setItem("gbaSave", gba.saveState());
}

function loadGame() {
    var state = localStorage.getItem("gbaSave");
    if (state) gba.loadState(state);
}

// Load the ROM when the page is ready
document.addEventListener("DOMContentLoaded", function() {
    loadROM("roms/pokemon-emerald.gba");
});
