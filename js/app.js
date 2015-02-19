//my API key AIzaSyC7ZQhFDobGaUbG2i5Q23a0ud6b6BwnT9E

var searchTerm = $('#query').val();

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
    	$.each(results, function(index,value) {
    		html += '<div>' + value.snippet.thumbnails.default + '</div>';
    	})
    	$(".photos").html(html);
    }

    ///used this prior to calling getRequest in above function
    //getRequest();

    

	/*$(function() {
		$.getJSON('https://www.googleapis.com/youtube/v3/search', function(data) {
			console.log(data);
			myData = data.Search;
			$.each(myData, function(index, value) {
				console.log(value.Title);
			})
		})
	});

*/

});
