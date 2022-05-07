 


$(document).ready(function(){



	//row-1
	$('#square-green-1').mouseenter(function(){
		$('#circle-yellow').fadeOut('1000');
	});

	$('#square-green-1').mouseleave(function(){
		$('#circle-yellow').fadeIn('1000');
	});

	//row-2
		$('#square-red').mouseenter(function(){
		$('#circle-blue').fadeOut('3000');
	});

	$('#square-red').mouseleave(function(){
		$('#circle-blue').fadeIn('3000');
	});

	//row-3
		$('#square-pink').mouseenter(function(){
		$('#circle-black').fadeOut('3000');
	});

	$('#square-pink').mouseleave(function(){
		$('#circle-black').fadeIn('3000');
	});

	//row-4
		$('#square-blue').mouseenter(function(){
		$('#circle-red').fadeOut('3000');
	});

	$('#square-blue').mouseleave(function(){
		$('#circle-red').fadeIn('3000');
	});

	//row-5
		$('#square-green').mouseenter(function(){
		$('#circle-pink').fadeOut('3000');
	});

	$('#square-green').mouseleave(function(){
		$('#circle-pink').fadeIn('3000');
	});

	alert('hover over the squares!');



});


