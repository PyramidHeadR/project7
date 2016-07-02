$(document).ready(function(){

	var images = ['01','02','03','04', '05'];
	var thisImg = 0;

	$('.imgBlock').css('background-image', 'url(img/'+images[thisImg]+'.jpg)');

	for(var i = 0; i < images.length; i++){
		$('.dots').append('<div class="dot" data-img="'+i+'">');
	}
	$('.dot:first').addClass('active');

	$('.dot').click(function(){
		$('.dot').removeClass('active');
		$(this).addClass('active');
		thisImg = $(this).attr('data-img');
		$('.imgBlock').css('background-image', 'url(img/'+images[thisImg]+'.jpg)');
	})

})