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
