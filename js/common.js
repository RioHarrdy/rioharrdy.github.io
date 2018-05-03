$(document).ready(function(){

	$('button').on('click', function(){
		$('body').toggleClass('open');
	});	

	(function(){
		var durationAnimation = 150;
		var firstSvg = new Vivus('firstSvg', {
			type: 'delayed',
			duration: durationAnimation
		});

	})();
	
});



