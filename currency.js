var currency = {
	currency: {
		basis: "ILS", 
		rates: {
			ILS: 1,
			USD: 3.6,
			GBP: 5, 
			EUR: 4, 
		}, 	
	}, 
	weight: {
		basis: "G", 
		rates: {
			G: 1,
			KG: 1000,
			TON: 1000000, 
			LBS: 400, 
		}
	}, 
	length: {
		basis: "CM", 
		rates: {
			CM: 1,
			METER: 100,
			MM: 0.1, 
		}
	}, 
};

// $('section.from input').on('input', function(event) {
$('section.from input').keyup(function(event) {
	var ratesFrom = $('section.from select').val();
	var ratesTo = $('section.to select').val();
	var currentView = $('.tabs-container button.active').attr('data-view');
	if (currentView === 'currency') {
		getValueFromAPI(event.target.value, ratesFrom, ratesTo)
	}
	if (/\d+/.test(event.target.value)) {
		printResult(calcValue(event.target.value, ratesFrom, ratesTo, currentView));
	}
});

function calcValue(value, ratesFrom, ratesTo, currentView) {
	return value * currency[currentView].rates[ratesFrom] / currency[currentView].rates[ratesTo];
}

function getValueFromAPI(value, ratesFrom, ratesTo) {
	$.get('//api.fixer.io/latest?base=' + ratesFrom + '&symbols=' + ratesTo, function(response) {
		printResult(value * response.rates[ratesTo]);
	});
}

function printResult(res) {
	$('section.to output').val(res);
}
