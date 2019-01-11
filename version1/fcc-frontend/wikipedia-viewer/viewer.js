/*
	USE THE METHOD $.getJSON(url_string, callback) to get json 
	from particular url.
	Thats how it will be used in this case
	*/
//s: https://en.wikipedia.org/w/api.php?action=query&list=search&prop=images&format=json&srsearch=dbz&srnamespace=0&srprop=snippet&srlimit=10&imlimit=1
	
	function searchResults(queryString){
		var apiURLFirstHalf = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=';
		var apiURLString = apiURLFirstHalf + queryString + '&limit=10&format=json&callback=?';		
		
		$.getJSON(apiURLString, function(data){			
			for(var i=0; i<10; i++){
				console.log(data[1][i]);
				console.log(data[2][i]);
			
				var itemList = '<li class="list-group-item"><h4 class="list-group-item-heading">'+'<a href="'
				+ data[3][i] + '">' + data[1][i]
				 +'</a></h4><p class="list-group-item-text">'+data[2][i]+'</p></li>';
				var searchAppend = document.getElementById("search-results-box");
				searchAppend.innerHTML += itemList;
			}
		});
		
		/*$.get('https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&search=medical school&limit=10&format=json', function (data) {
		  $.each(data.query.pages, function( index, value ) {
			var title = value.title;
			console.log(title);
		  });
		});*/
	}
	function wikiQuery(){
		var value = document.getElementById("search").value;
		document.getElementById("search-results-box").innerHTML = value;
		searchResults(value);
	}
	function wikiQueryWEnter(){
		$("#search").on('keyup', function (e) {
			if (e.keyCode == 13 ) {
				var value = document.getElementById("search").value;
				document.getElementById("search-results-box").innerHTML = value;
				searchResults(value);
			}
		});
	}
	function randomArticle(){
		window.location.href = 'https://en.wikipedia.org/wiki/Special:Random';
	}
	wikiQueryWEnter();