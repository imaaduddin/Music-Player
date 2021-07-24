const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const songs = [
  {
    name: "imaad-1",
    displayName: "Fights",
    artist: "AGST",
  },
  {
    name: "imaad-2",
    displayName: "Unite!",
    artist: "Donell Mase",
  },
  {
    name: "imaad-3",
    displayName: "Lift Off",
    artist: "Killrude"
  }
];

// Check if playing
let isPlaying = false;

// Play 
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause 
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause Event Listener 
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));