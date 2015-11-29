// Start with what event is happening (in this case, it's "click me" button)
document.getElementById('clickme').onclick = getFortune;

function getFortune () {
	// Steps in a function: 
	// 		1. get your inputs
	var hometown = document.getElementById('hometown').value
	var partner = document.getElementById('partner').value
	var numKids = document.getElementById('numKids').value
	var jobTitle = document.getElementById('jobTitle').value
	// to get and set the .value from an input in HTML

	// 2. Run your function logic (string concatnation)
	var fortuneString = "You will be a " + jobTitle + " living in " + hometown + " married to " + partner + " with " + numKids + " kids."

	// 3. Output
	document.getElementById('output').innerHTML = fortuneString
}