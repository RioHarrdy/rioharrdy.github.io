$(document).ready(function(){

	$('button').on('click', function(){
		$('body').toggleClass('open');
	});	

	(function(){
		var durationAnimation = 100;
		var firstSvg = new Vivus('firstSvg', {
			type: 'sync',
			duration: durationAnimation
		});

	})();
	
});



