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







})