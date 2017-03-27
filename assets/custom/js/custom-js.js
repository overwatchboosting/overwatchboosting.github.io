var defaulKeyuptDelay = 500;
var defaultDelay = 250;

$(document).ready(function() {
	$('#serviceType').change(function() {delay(function(){calculateForm($("#serviceType").val());}, defaultDelay );});
	$('#boostStartRank').keyup(function() {delay(function(){calculateForm("boost");}, defaulKeyuptDelay );});
	$('#boostEndRank').keyup(function() {delay(function(){calculateForm("boost");}, defaulKeyuptDelay );});
	$('#boostSoloOption').click(function() {delay(function(){calculateForm("boost");}, defaultDelay );});
	$('#boostGroupOption').click(function() {delay(function(){calculateForm("boost");}, defaultDelay );});
});

$(document).on('click', '#boostSoloOption', function(event) {

	if ($("#boostSoloOption > i.material-icons").html() === "radio_button_checked")
		return;
	
	$("#boostGroupOption > i.material-icons").html("radio_button_unchecked");
	$("#boostSoloOption > i.material-icons").html("radio_button_checked");
	calculateForm("boost");
});

$(document).on('click', '#boostGroupOption', function(event) {

	if ($("#boostGroupOption > i.material-icons").html() === "radio_button_checked")
		return;
	
	$("#boostSoloOption > i.material-icons").html("radio_button_unchecked");
	$("#boostGroupOption > i.material-icons").html("radio_button_checked");
	calculateForm("boost");
});

function calculateForm(form)
{
	if (form == "boost")
	{
		var start = parseInt($("#boostStartRank").val());
		var end = parseInt($("#boostEndRank").val());
		
		var priceArray = [
			{upperBound: 4000, lowerBound: 3900, rate: .52},
			{upperBound: 3900, lowerBound: 3800, rate: .46},
			{upperBound: 3800, lowerBound: 3700, rate: .40},
			{upperBound: 3700, lowerBound: 3600, rate: .34},
			{upperBound: 3600, lowerBound: 3500, rate: .28},
			{upperBound: 3500, lowerBound: 3400, rate: .24},
			{upperBound: 3400, lowerBound: 3300, rate: .22},
			{upperBound: 3300, lowerBound: 3200, rate: .20},
			{upperBound: 3200, lowerBound: 3100, rate: .18},
			{upperBound: 3100, lowerBound: 3000, rate: .16},
			{upperBound: 3000, lowerBound: 2900, rate: .14},
			{upperBound: 2900, lowerBound: 2800, rate: .12},
			{upperBound: 2800, lowerBound: 2700, rate: .10},
			{upperBound: 2700, lowerBound: 2600, rate: .08},
			{upperBound: 2600, lowerBound: 2500, rate: .06},
			{upperBound: 2500, lowerBound: 1   , rate: .05},
		];
		
		var max = priceArray[0].upperBound;
		var min = priceArray[priceArray.length-1].lowerBound;
		
		start = (start < min ? min : (start > max ? max : start));
		end = (end < min ? min : (end > max ? max : end));

		if (isNaN(start) || isNaN(end) || (start > end))
		{
			$("#boostPrice").val("");
			return;
		}
		else
		{
			$("#boostStartRank").val(start);
			$("#boostEndRank").val(end);
			
			for (i = 0, tierSR = 0, price = 0; i < priceArray.length; i++)
			{
				if (end > priceArray[i].lowerBound)
				{
					tierSR = (end > priceArray[i].upperBound ? priceArray[i].upperBound : end) - (start > priceArray[i].lowerBound ? start : priceArray[i].lowerBound);
					tierSR = (tierSR > 0 ? tierSR : 0);
					price += priceArray[i].rate * tierSR;
				}
			}
			
			if ($("#boostSoloOption > i.material-icons").html() === "radio_button_checked")
				price /= 2;
			
			$("#boostPrice").val(price.toFixed(2));
		}
	}
	else if (form == "placement"){}
	else if (form == "derank"){}
}

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();