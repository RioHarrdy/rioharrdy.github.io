$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);


///////// Мои скрипты ///////////

//Кастомизация select
(function(){
	$('.styler').styler();
})();

//Выпадающий список в меню
(function(){									
	$(".filter__form__link_drop").on('click', function(e){

		e.preventDefault();
		var nearDiv = $(this).siblings('.filter__form__content__drop');
		var parentDiv = $(this).parent().toggleClass('open');		

		var listLength = nearDiv.find(".mCSB_container").children().length;			
				
		if(listLength <= 2) {nearDiv.css('height','40px')} else
		if(listLength <= 4) {nearDiv.css('height','70px')} else 
		if(listLength <= 6) {nearDiv.css('height','100px')} else
		if(listLength <= 8) {nearDiv.css('height','125px')} else
		if(listLength <= 10) {nearDiv.css('height','150px')} else
		if(listLength <= 12) {nearDiv.css('height','180px')} else {nearDiv.css('height','180px')}

		if(!parentDiv.hasClass('open')) {
			nearDiv.css('height','0');
		}	 
	});

	//Active label 
	$('.filter__form__content__drop label').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
	})

	//Mobile 		
	$(".filter_btn").on('click', function(e){
		e.preventDefault();	
		var filterWrap = $(this).parents('.filter');	
		filterWrap.toggleClass('active');	
	});
	
})();

//Rating
(function(){	
	$('.rating').each(function(){		
		var $this = $(this);
		var rating = $this.data('rating');
		switch (rating) {
			case 5:
				$this.find('.rating__star:nth-child(5)').addClass('active');				
			case 4:
				$this.find('.rating__star:nth-child(4)').addClass('active');				
			case 3:
				$this.find('.rating__star:nth-child(3)').addClass('active');			
			case 2:
				$this.find('.rating__star:nth-child(2)').addClass('active');				
			case 1:
				$this.find('.rating__star:nth-child(1)').addClass('active');								
		}	
	});
})();

// Custome scroll
(function(){									
	$(".filter__form__content__drop").mCustomScrollbar({
		axis:"y",
		scrollInertia: 300,
		scrollEasing:"linear"
	});
})();

//Slick Slider
(function (){
	$('.slider').slick({	
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,		
		appendDots:$('.controls__wrap'),
		appendArrows:$('.controls__wrap'),
		speed: 300,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="next-prev"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
  });
})();


