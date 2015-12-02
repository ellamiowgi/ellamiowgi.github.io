$(document).ready(function () {

	//for middle box
	var total = 0;

	//add 10
	$('#a10').click(add10)

	//add function (now that we have handler)
	function add10 () {
		total = total + 10
		//total += 10 is the same as above
		$('#out').text(total)
	}

	$('#a20').click(add20)

	function add20 () {
		total = total + 20
		$('#out').text(total)
	}


	// Optimum solution for numbers
	// Love, Jon
	var $nums = $('.num');
	var $out = $('#out');

	// $nums.click(function(e) {
	// 	var num = $(this).data().num;
	// 	total += num;
	// 	$out.text(total);
	// })

	var $colors = $('.color');

	// $colors.click(function(e) {
	// 	var color = $(this).data().color;
	// 	$out.css('background-color', color);
	// })



})