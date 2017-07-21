$(document).ready(function(){
	$('.menu_icon').click(function(){
		$(this).toggleClass('open');
		$('.main_menu').toggleClass('show');
	});
	$('.main_menu').click(function(){
		$('.menu_icon').toggleClass('open');
		$(this).toggleClass('show');
	})
	$('.main_menu_list li').hover(
		function(){
                $('.submenu', this).fadeIn(400);
            }, 
            function () {
                $('.submenu', this).fadeOut(400);            
            }
        );
});