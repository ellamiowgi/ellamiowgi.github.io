document.getElementById('fahrenheit').onkeyup = convertToCelsius;

function convertToCelsius () {
	var fahrenheit = document.getElementById('fahrenheit').value;

	var convertedCelsius = (fahrenheit - 32) * .5556;

	// Here is the conditional I added to check if input is blank so it's not read as 0 value - MIKE 
	if (fahrenheit == '') {
		convertedCelsius = '';
	}

	document.getElementById('celsiusResult').value = convertedCelsius

// Question: after deleting a number in my "Enter Fahrenheit" input, the converter is reading that value as zero and leaving the "Celsius Result" calculated at "-17.7792". How do I eliminate that?

// Great question. We can do a check to see if input is blank and use a conditional to clear out the result. -MIKE



	if (convertedCelsius < 10) {
    	document.body.style.backgroundColor = "dodgerblue";
	} else if (convertedCelsius > 10.1 && convertedCelsius < 29.9) {
    	document.body.style.backgroundColor = "#10d7af";
	} else if (convertedCelsius > 30) {
    	document.body.style.backgroundColor = "deeppink";
	}

}

document.getElementById('celsius').onkeyup = convertToFahrenheit;

function convertToFahrenheit () {
	var celsius = document.getElementById('celsius').value;

	var convertedFahrenheit = (celsius * 1.8) + 32;

	document.getElementById('fahrenheitResult').value = convertedFahrenheit

// Question: same as above, but eliminating the "Fahrenheit Result" calculated at 32. Thanks!
}
