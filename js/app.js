//my API key AIzaSyC7ZQhFDobGaUbG2i5Q23a0ud6b6BwnT9E

$(document).ready(function() {
	console.log('js check');



	function onYouTubeApiLoad() {
    	gapi.client.setApiKey('AIzaSyC7ZQhFDobGaUbG2i5Q23a0ud6b6BwnT9E');
    }	

    var getRequest = function(data) {
    	var params = {
    			part: 'snippet',
    			key: 'AIzaSyC7ZQhFDobGaUbG2i5Q23a0ud6b6BwnT9E',
    			q: "basketball"
    	};
    	var url = 'https://www.googleapis.com/youtube/v3/search';

    	$.getJSON(url, params, function(data) {
    		console.log(data);
    	});
    }


	/*$(function() {
		$.getJSON('https://www.googleapis.com/youtube/v3/search', function(data) {
			console.log(data);
			myData = data.Search;
			$.each(myData, function(index, value) {
				console.log(value.Title);
			})
		})
	});*/

});
