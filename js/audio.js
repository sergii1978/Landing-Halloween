$(document).ready(function() {

	var audio = $('#audioTrack')[0];
	console.log(audio);

	$playBtn = $('#audio-play');
	$pauseBtn = $('#audio-pause');
	$audioControl = $('[data-type="audio-control"]');

	// initAudioPlayer();
	setTimeout(initAudioPlayer, 1000);
	
	function initAudioPlayer() {
		$playBtn.parent().show();
		// $pauseBtn.parent().show();
		audio.loop = true;
		audio.play();

		$audioControl.click(function(){
			console.log('audio control click');

			if (audio.paused) {
				audio.play();
				$playBtn.parent().hide();
				$pauseBtn.parent().show();
				console.log('playing now');
			} else {
				audio.pause();
				$pauseBtn.parent().hide();
				$playBtn.parent().show();
				console.log('pause now');
			}

		});
	}



	// audio.play();
});
