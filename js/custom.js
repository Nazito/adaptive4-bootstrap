
$(document).ready(function(){
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
			margon  : 10,
			padding  : 10
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

	if($("#slider1").length) {
		var owl = $("#slider1");

		owl.owlCarousel({
			items: 5,
			margin: 10,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoPlaySpeed: 5000,
			autoPlayTimeout: 3000,
			autoplayHoverPause: true,
		});
	};
	
	if($("#slider2").length) {
		var owl = $("#slider2");

		owl.owlCarousel({
			items: 3,
			margin: 10,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoPlaySpeed: 5000,
			autoPlayTimeout: 3000,
			autoplayHoverPause: true,
		});
	};

	if($("#slider3").length) {
		var owl = $("#slider3");

		owl.owlCarousel({
			items: 4,
			margin: 10,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoPlaySpeed: 5000,
			autoPlayTimeout: 3000,
			autoplayHoverPause: true,
		});
	};

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



$('.header-container').on('mousemove',(e) =>{
    const x = e.pageX / $(window).width();
    const y = e.pageY / $(window).height();

    $('.paralax-bg_wave1').css(
        'transform',
        'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'
    )
});


$(window).scroll(function(){
	var st = $(this).scrollTop();

	$(".container-right_img").css({
		"transform" : "translateX(" + st/10 + "%)"
    });

    $(".container-left__logo").css({
		"transform" : "translateX(" + -st/10 + "%)"
    });

    $(".container-left__img-illUstrator").css({
		"transform" : "translateX(" + st/20 + "%)"
	});
    
    $(".container-left__h4").css({
		"transform" : "translateX(" + st/10 + "%)"
    });
    
});

