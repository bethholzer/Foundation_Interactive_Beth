$(document).ready(function() {
	$('.blue-border').draggable();
	
	$('.purple').droppable({
		accept:'.blue-border',
		drop: function(){
			$('div.blank').addClass('orange');
		}
	});

	$('.green').droppable({
		activeClass:'rainbow',
		hoverClass:'grayscale',
		drop: function(){
			$(this).hide(1000);
		}
	});


});

