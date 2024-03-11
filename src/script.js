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
    if (listening) {
        listening = false;
    }
    else {
        startListening();
    }
}