$(document).ready(function() {
	console.log('js check');

	$(function() {
		$('#search-term').submit('click', function() {
			event.preventDefault();
			var searchTerm = $('#query').val();
			getRequest(searchTerm);
				
		})
	})

    var getRequest = function(searchTerm) {
    	var params = {
    			part: 'snippet',
    			key: 'AIzaSyC7ZQhFDobGaUbG2i5Q23a0ud6b6BwnT9E',
    			q: "basketball",
    			
    	};
    	var url = 'https://www.googleapis.com/youtube/v3/search';

    	$.getJSON(url, params, function(data) {
    		showResults(data);
    		console.log(data);
    	});
    }

    var showResults = function(results) {
    	var html = "";
    	$.each(results.items, function(index,item) {
    		html += '<div><img src="' + item.snippet.thumbnails.default.url + '"></div>';
    	})
    	$(".photos").html(html);
    }

    ///used this prior to calling getRequest in above function
    //getRequest();

});
