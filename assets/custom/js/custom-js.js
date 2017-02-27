$("#serviceType").bindWithDelay("onchange", calculateForm(event, $("#serviceType").val()), 1000);
$("#boostStartRank").bindWithDelay("onkeyup", calculateForm(event, "boost"), 1000);
$("#boostEndRank").bindWithDelay("onkeyup", calculateForm(event, "boost"), 1000);
$("#boostSoloOption").bindWithDelay("click", calculateForm(event, "boost"), 1000);
$("#boostGroupOption").bindWithDelay("click", calculateForm(event, "boost"), 1000);


function calculateForm(event, form)
{
	alert(event + " " + form);
}