const hamburger = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

const showMoreBtn = document.querySelector('.show-more');
const hiddenVideos = document.querySelectorAll('.video-item.hidden');

showMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    hiddenVideos.forEach(function(video) {
            video.classList.remove('hidden');
    });
        showMoreBtn.style.display = 'none';
});

const playButton = document.querySelector('.play');
const video = document.querySelector('.excurs-video-container iframe');
const hand = document.querySelector('.hand2')

playButton.addEventListener('click', function() {
    video.style.display = 'block';
    playButton.style.display = 'none';
    hand.style.top = '-40px';
    hand.style.left = '-160px';
    playButton.blur();
});