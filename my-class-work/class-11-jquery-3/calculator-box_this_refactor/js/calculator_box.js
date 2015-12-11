$(document).ready(function(){
	var total = 0;

	$('.math div').click(function () {
		var num = $(this).text()
		num = parseInt(num)
		total = total + num
		$("#out").html(total);

		// total = total + someValue
		// $("#out").html(total);
	})



	// $("#a10").click(function(){
	// 	total = total + 10;
	// 	$("#out").html(total);
	// });
	// $("#a20").click(function(){
	// 	total = total + 20;
	// 	$("#out").html(total);	
	// });
	// $("#a30").click(function(){
	// 	total = total + 30;
	// 	$("#out").html(total);	
	// });
	// $("#n10").click(function(){
	// 	total = total - 10;
	// 	$("#out").html(total);	
	// });
	// $("#n20").click(function(){
	// 	total = total - 20;
	// 	$("#out").html(total);	
	// });
	// $("#n30").click(function(){
	// 	total = total - 30;
	// 	$("#out").html(total);	
	// });

	$("#red").click(function(){
		$("#out").css("background-color", "red");
	});

	$("#blue").click(function(){
		$("#out").css("background-color", "blue");
	});

	$("#out").click(function(){
		$("#out").css("background-color", "white");
	});

});