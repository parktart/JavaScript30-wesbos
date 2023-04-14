const video = document.querySelector('video');
const progressBar = document.querySelector('.progress__filled');
const playButton = document.querySelector('button[title="Toggle Play"]');
const volumeInput = document.querySelector('input[name="volume"]');
const playRateInput = document.querySelector('input[name="playbackRate"]');
const backButton = document.querySelector('button[data-skip="-10"]');
const forwardButton = document.querySelector('button[data-skip="25"]');

// console.dir(video);
video.currentTime = 0.1;

// Play/Pause
playButton.addEventListener('click', () => {
  (video.paused === true)
    ? video.play()
    : video.pause();
});

// update Progress Bar
video.addEventListener('timeupdate', () => {
  progressBar.style.flex = video.currentTime / video.duration;
});

// Volume
volumeInput.addEventListener('input', () => {
  video.volume = volumeInput.value
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
