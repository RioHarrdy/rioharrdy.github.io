$(document).ready(function(){

	var mixer = mixitup('.main',{	
	});
	
	

	$('.about_btn').on('click', function(){
		$('body').toggleClass('open');
	});

	$('.contacts_btn').click(function() {
		$('.nav').toggleClass('toggle')
	});			

	(function(){
		var durationAnimation = 150;
		var firstSvg = new Vivus('firstSvg', {
			type: 'delayed',
			duration: durationAnimation
		});
	})();	

	
});

$(document).keydown(function(e) {
	if($('body').hasClass('open')) {
		if( e.keyCode === 27 ) {				
			$('body').removeClass('open');	
		}	
	}		
	if($('.nav').hasClass('toggle')) {
		if( e.keyCode === 27 ) {				
			$('.nav').removeClass('toggle');	
		}	
	}		
});


