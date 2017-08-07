	function getFCCStream(){
		var fccStreamValid = 'https://wind-bow.glitch.me/twitch-api/streams/freecodecamp';
		$.getJSON(fccStreamValid, function(data){
			if(data.stream === null){
				var offline = document.getElementById("offline-stream");
				var linkTag = '<a href="' + 'https://www.twitch.tv/freecodecamp' + 
				'" class="list-group-item"> FreeCodeCamp <p class="lead">offline</p></a>';
				offline.innerHTML = linkTag;
			} else{
				var offline = document.getElementById("online-stream");
				var linkTag = '<a href="' + 'https://www.twitch.tv/freecodecamp' + 
				'" class="list-group-item"> FreeCodeCamp <p class="lead">online</p>';
				linkTag += '<p>Playing ' + data.stream.game + '</p><p>' +
				'Status: ' + data.stream.channel.status + '</p></a>'
				offline.innerHTML = linkTag;
			}
		});
	}
	//function for box box
	function getBoxBoxStream(){
		var boxboxStreamValid = 'https://wind-bow.glitch.me/twitch-api/streams/boxbox';
		$.getJSON(boxboxStreamValid, function(data){
			if(data.stream === null){
				var offline = document.getElementById("offline-stream");
				var linkTag = '<a href="' + 'https://www.twitch.tv/boxbox' + 
				'" class="list-group-item"> Box Box <p class="lead">offline</p></a>';
				offline.innerHTML = linkTag;
			} else{
				var offline = document.getElementById("online-stream");
				var linkTag = '<a href="' + 'https://www.twitch.tv/boxbox' + 
				'" class="list-group-item"> Box Box <p class="lead">online</p>';
				linkTag += '<p>Playing ' + data.stream.game + '</p><p>' +
				'Status: ' + data.stream.channel.status + '</p></a>'
				offline.innerHTML = linkTag;
				
			}
		});
	}
	getFCCStream();
	getBoxBoxStream();