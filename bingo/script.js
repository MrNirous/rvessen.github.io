$(document).ready(function(){
	
	var assetsPath = "assets/";
	src = assetsPath+"snd_flash64.ogg";
	src2 = assetsPath+"mission.ogg";
	createjs.Sound.alternateExtensions = ["mp3"];
	createjs.Sound.registerSound(src);
	createjs.Sound.registerSound(src2);
	var rij1; var rij2; var rij3; var rij4; var rij5;
	if(localStorage.getItem('aantal') !== null ){
		rij1 = parseInt(localStorage.getItem('rij1'));
		rij2 = parseInt(localStorage.getItem('rij2'));
		rij3 = parseInt(localStorage.getItem('rij3'));
		rij4 = parseInt(localStorage.getItem('rij4'));
		rij5 = parseInt(localStorage.getItem('rij5'));
	} else {
		rij1 = Math.floor(Math.random()*5)+1; 
		rij2 = Math.floor(Math.random()*5)+6; 		
		rij3 = Math.floor(Math.random()*5)+11; 		
		rij4 = Math.floor(Math.random()*5)+16; 
		rij5 = Math.floor(Math.random()*5)+21;
		localStorage.setItem('aantal',0);
		localStorage.setItem('rij1', rij1);
		localStorage.setItem('rij2', rij2);
		localStorage.setItem('rij3', rij3);
		localStorage.setItem('rij4', rij4);
		localStorage.setItem('rij5', rij5);
	}
	for(var i=1;i<=25;i++){
		switch(i){
		case rij1:
		case rij2:
		case rij3:
		case rij4:
		case rij5:
			$('#bingokaart').append('<span class="blok" id="img'+i+'"><img src="zwart.png" width="118" height="118" alt="bingo" style="display:block;"> </span>');
			break;
		default:
			if(localStorage.getItem('img'+i) == 'checked'){
				$('#bingokaart').append('<span class="blok" id="img'+i+'"><img src="bingo.png" width="118" height="118" alt="bingo"> </span>');
			} else{
				$('#bingokaart').append('<span class="bingo blok" id="img'+i+'"><img src="bingo.png" width="118" height="118" alt="bingo"> </span>');
			}
			break;
		}
		if(localStorage.getItem('img'+i)){
			$('#img'+i).children('img').css('display','block');
		}
	}

	$('.bingo').on('click', function(){
		$(this).unbind();
		
		$(this).children('img').css('display', 'block');
		if(localStorage.getItem('aantal') == 19){
			createjs.Sound.play(src2);
		} else {
		createjs.Sound.play(src);
		}
		localStorage.setItem($(this).attr('id'),'checked');
		var tmp = parseInt(localStorage.getItem('aantal'));
		localStorage.setItem('aantal', tmp+1);	
		
	});
	$('#reset').on('click', function(){
		localStorage.clear();
		location.reload();
	})

});
