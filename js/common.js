$(document).ready(function(){

	$('button').on('click', function(){
		$('body').toggleClass('open');
	});	

	(function(){
		var durationAnimation = 200;
		var firstSvg = new Vivus('firstSvg', {
			type: 'oneByOne',
			duration: durationAnimation
		});

	})();
	
});



