$(document).ready(function() {
	$('#maintitle').textillate({initialDelay:1500, in: {effect: 'fadeIn', delay: 100, sync: false, shuffle: true}});

	function onYouTubePlayerReady(playerId) {
		var player =  iframe.getElementById('player');
		player.mute();
	}

	// var div = document.getElementsByClassName("bgcontainer");
	// var speed = 1.5;

	// window.onscroll = function()
	// {
	// 	var yOffset = window.pageYOffset;
	// 	div.style.backgroundPosition = "0px " + (yOffset/speed) + "px";
	// }
});