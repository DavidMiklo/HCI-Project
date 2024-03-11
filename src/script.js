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
    var banner_icon = document.getElementById('banner-play-pause-icon');
    var menu_icon = document.getElementById('menu-play-pause-icon');
    if (!listening) {
        listening = true;
        banner_icon.classList.remove('fa-play');
        banner_icon.classList.add('fa-pause');
        if (menu_icon !== null) {
            menu_icon.classList.remove('fa-play');
            menu_icon.classList.add('fa-pause');
        }
    }
    else {
        listening = false;
        banner_icon.classList.remove('fa-pause');
        banner_icon.classList.add('fa-play');
        if (menu_icon !== null) {
            menu_icon.classList.remove('fa-pause');
            menu_icon.classList.add('fa-play');
        }
    }
}