$(document).ready(function() {
	console.log('js check');

	//my API key AIzaSyC7ZQhFDobGaUbG2i5Q23a0ud6b6BwnT9E

	function onYouTubeApiLoad() {
   		// This API key is intended for use only in this lesson.
    	// See http://goo.gl/PdPA1 to get a key for your own applications.
    	gapi.client.setApiKey('AIzaSyC7ZQhFDobGaUbG2i5Q23a0ud6b6BwnT9E');
    }	

	$(function() {
		$.getJSON('https://www.googleapis.com/youtube/v3/search', function(data) {
			myData = data.Search;
			$.each(myData, function(index, value) {
				console.log(value.Title);
			})
		})
	});

});
