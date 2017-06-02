function cl (msg) {console.log(msg);}

var options = {
	currency: [
		{value: 'USD', textContent: 'Dollar', selected: false},
		{value: 'ILS', textContent: 'Shekel', selected: true}
	], 
	weight: [
		{value: 'KG', textContent: 'Kilogram', selected: false},
		{value: 'G', textContent: 'Gram', selected: true}
	], 
	length: [
		{value: 'CM', textContent: 'Centimeter', selected: false},
		{value: 'M', textContent: 'Meter', selected: true}
	], 
};

 manageView('currency');

cl('success');

$('.tabs-container button').click(function(event) {
	$('.tabs-container button').removeClass('active');
	$(event.target).addClass('active');
	manageView($(event.target).attr('data-view'));
});

function manageView(view) {
	var tags = buildOptions(options[view], true);
	$('section.from select').empty();
	tags.forEach(function (tag) {
		tag.appendTo('section.from select');
	})
	var tags = buildOptions(options[view], false);
	$('section.to select').empty();
	tags.forEach(function (tag) {
		tag.appendTo('section.to select');
	})
	cl(view);
}

function buildOptions (options, isFirst) {
	var result = [];
	options.forEach(function (option) {
		var tag = $('<option>', {
			value: option.value, 
			text: option.textContent,
			selected: !isFirst ? option.selected : false, 
		});
		result.push(tag);
	});
	return result;
}