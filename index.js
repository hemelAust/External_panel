
$(document).ready(function()
{
	var window_height = $(window).height();
	var window_width = $(window).width();

	$('#panel').css('height', window_height - 20);
	$('#website').css('height', window_height - 25).css('width', window_width - 20);

	$('#button').click(function(){

		var value = $('#button').text();

		if( value == 'Open'){

			$('#website').animate({ left : 320});
			$('#button').text("Close");

		}else{
			$('#website').animate({left : 0});
			$('#button').text("Open");
		}
	});
});

