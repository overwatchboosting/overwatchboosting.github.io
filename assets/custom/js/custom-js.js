var defaultDelay = 500;

$(document).ready(function() {
	$('#serviceType').change(function() {delay(function(){calculateForm($("#serviceType").val());}, defaultDelay );});
	$('#boostStartRank').keyup(function() {delay(function(){calculateForm("boost");}, defaultDelay );});
	$('#boostEndRank').keyup(function() {delay(function(){calculateForm("boost");}, defaultDelay );});
	$('#boostSoloOption').click(function() {delay(function(){calculateForm("boost");}, defaultDelay );});
	$('#boostGroupOption').click(function() {delay(function(){calculateForm("boost");}, defaultDelay );});
});

function calculateForm(form)
{
	if (form == "boost")
	{
		var start = parseInt($("#boostStartRank").val());
		var end = parseInt($("#boostEndRank").val());
		var price = 0;

		if (isNaN(start) || isNaN(end))
		{
			$("#boostPrice").val("");
			return;
		}
		else
		{
			start = (start < 1 ? 1 : (start > 3500 ? 3500 : start));
			end = (end < 1 ? 1 : (end > 3500 ? 3500 : end));
			
			$("#boostStartRank").val(start);
			$("#boostEndRank").val(end);
			
			var tierSR = 0;
			
			if (end > 3000)
			{
				tierSR = (end - (start > 3000 ? start : 3000));
				tierSR = (tierSR > 0 ? tierSR : 0);
				price += .20 * tierSR;
			}
			if (end > 2500)
			{
				tierSR = (end > 3000 ? 3000 : end) - (start > 2500 ? start : 2500);
				tierSR = (tierSR > 0 ? tierSR : 0);
				price += .10 * tierSR;
			}
			tierSR = (end > 2500 ? 2500 : end) - start;
			tierSR = (tierSR > 0 ? tierSR : 0);
			price += .05 * tierSR;
			
			if ($("#boostSoloOption").prop("checked"))
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