function updateContent(page) {
    fetch(page)
  .then(response=> response.text())
  .then(text=> document.getElementById('content').innerHTML = text.getElementById('content').innerHTML);


    // let message;
    // switch (page) {
    //     case 'home':
    //         message = "You clicked on the Home button.";
    //         break;
    //     case 'library':
    //         message = "You clicked on the Library button.";
    //         break;
    //     case 'search':
    //         message = "You clicked on the Search button.";
    //         break;
    //     case 'friends':
    //         message = "You clicked on the Friends button.";
    //         break;
    //     default:
    //         message = "Invalid button clicked.";
    // }
    // document.getElementById('content').innerHTML = "<p>" + message + "</p>";
}
