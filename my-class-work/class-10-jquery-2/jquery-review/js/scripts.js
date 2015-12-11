$(document).ready(function () {

	$('.box').css('background-color')
		.css('background-color', 'pink')
		.text('i am a box!')
		// the .css and .text are "chained"

	$('#box-one').click(increaseBoxOne)
	$('#box-two').click(increaseBoxTwo)

	function increaseBoxOne () {
		$("#box-one")
		.css ({
				'height': '500px',
				'width': '500px'
			})
	}
	function increaseBoxTwo () {
		$("#box-two").css({'height': '500px', 'width': '500px'})
	}



})