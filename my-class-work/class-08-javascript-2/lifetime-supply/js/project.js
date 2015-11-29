document.getElementById('click-me').onclick = calculateLifetimeDrinks;

function calculateLifetimeDrinks () {
	// console.log('hihiii');

	var currentAge = document.getElementById('age').value;
	var plannedAge = document.getElementById('max-age').value;
	var favDrink = document.getElementById('item').value;
	var numberPerDay = document.getElementById('num-per-day').value;

	// console.log(currentAge, plannedAge, favDrink, numberPerDay);

	var calculationOfLifetimeDrinks = (plannedAge - currentAge) * 365 * numberPerDay;

	// console.log(calculationOfLifetimeDrinks)

	document.getElementById('solution').innerHTML = calculationOfLifetimeDrinks;
	document.getElementById('drink').innerHTML = favDrink;
}