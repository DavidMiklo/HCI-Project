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

function searchMusic() {
    var input = document.getElementById('search');
    var filter = input.value.toUpperCase();
    var list = Array.from(document.getElementsByClassName('music-list-item'));

    for (var i = 0; i < list.length; i++) {
        var name = list[i].getElementsByTagName('p')[0].innerHTML.toUpperCase();
        console.log(name);
        console.log(filter);
        if (name.indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
    
}


