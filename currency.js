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
	if (/\d+/.test(event.target.value)) {
		$('section.to output').val(calcValue(event.target.value));
	}
});

function calcValue(value) {
	var ratesFrom = $('section.from select').val();
	var ratesTo = $('section.to select').val();

	var currentView = $('.tabs-container button.active').attr('data-view');

	return value * currency[currentView].rates[ratesFrom] / currency[currentView].rates[ratesTo];
}