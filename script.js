$(document).ready(function(){

	$('#overlay').delay(2000).fadeOut(3000);
	$('#refresh').click(function() {
    location.reload();
	});

	$('#mute').click(function(){
	   $('audio')[0].muted ^= 1;  // Toggle mute 1/0
	   $(this).toggleClass('muted');
	});

	var i = 1;

	$('#bg').click(function(){
		if(i<17){
			i++;
		}
		else{
			i = 1;
		}
		$("#clip source").attr('src','vids/v'+i+'.mp4');
		$("#clip")[0].load();
		$("#clip")[0].play();
	});



});