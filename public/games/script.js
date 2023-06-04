// Get the search input element
var searchInput = document.getElementById('search-input');

// Add an event listener for the input event
searchInput.addEventListener('input', function() {
  var searchValue = searchInput.value.toLowerCase();
  var games = document.getElementsByClassName('game');

  // Loop through the game elements and show/hide based on search value
  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var gameName = game.getElementsByTagName('h3')[0].innerText.toLowerCase();

    if (gameName.includes(searchValue)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  }
});
