listening = false;

function updateContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const content = doc.getElementById('content').innerHTML;
            document.getElementById('content').innerHTML = content;
        })
        .catch(error => console.error('Error fetching page:', error));
}

function startListening() {
    var song_banner = document.getElementById('song-banner');
    song_banner.classList.add('slideUpSongBanner');
    listening = true;
    updateContent('listening.html')
}

function playPause() {
    var icon = document.getElementById('banner-play-pause-icon');
    if (listening) {
        listening = false;
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }
    else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        startListening();
    }
}