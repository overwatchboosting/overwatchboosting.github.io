$('#serviceType').change(function() {delay(function(){calculateForm($("#serviceType").val());}, 1000 );});
$('#boostStartRank').keyup(function() {delay(function(){calculateForm("boost");}, 1000 );});
$('#boostEndRank').keyup(function() {delay(function(){calculateForm("boost");}, 1000 );});
$('#boostSoloOption').click(function() {delay(function(){calculateForm("boost");}, 1000 );});
$('#boostGroupOption').click(function() {delay(function(){calculateForm("boost");}, 1000 );});

function calculateForm(form)
{
	alert(form);
}

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();