App = {};

App.server = 'https://api.soundcloud.com/tracks?client_id=';
clientID = '';


App.fetch = function() {

  $.ajax({
    url:      'http://api.soundcloud.com/tracks?' + 'client_id=' + clientID,
    dataType: 'json',
    async:    false,
    success:  function(results) {
                console.log(results);
                App.displayMessages(results);
              }
  });

}

App.renderResults = function(track) {

  console.log("Entering Results");
  var $track = $('<div class="track">' + track.title + '</div>');

  $('#soundCloud').append($track);

}

App.displayMessages = function(results) {

  for (var i = 0; i < results.length; i++) {
    App.renderResults(results[i]);
    console.log(results[i]);
  }

}


$(document).ready(function() {

  $('.display').on('click', function() {
    App.fetch();
  })

});