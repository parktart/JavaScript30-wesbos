const video = document.querySelector('video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const playButton = document.querySelector('button[title="Toggle Play"]');
const volumeInput = document.querySelector('input[name="volume"]');
const playRateInput = document.querySelector('input[name="playbackRate"]');
const backButton = document.querySelector('button[data-skip="-10"]');
const forwardButton = document.querySelector('button[data-skip="25"]');

// console.dir(video);
video.currentTime = 0.1;

// Play/Pause
playButton.addEventListener('click', playOrPause);
video.addEventListener('click', playOrPause);

function playOrPause() {
  (video.paused === true)
    ? video.play()
    : video.pause();
}

video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

function updatePlayButton() {
  (video.paused === true)
    ? playButton.textContent = '►'
    : playButton.textContent = '❚❚';
}

// update Progress Bar
video.addEventListener('timeupdate', () => {
  progressBar.style.flex = video.currentTime / video.duration;
});

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
// progress.addEventListener('mouseout')


function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Volume
volumeInput.addEventListener('input', () => {
  video.volume = volumeInput.value;
});

// PlaybackRate
playRateInput.addEventListener('input', () => {
  video.playbackRate = playRateInput.value;
});

// skip back 10sec
backButton.addEventListener('click', () => {
  video.currentTime = video.currentTime - 10;
});

// skip forward 25sec
forwardButton.addEventListener('click', () => {
  video.currentTime = video.currentTime + 25;
});



video.ended = false;
