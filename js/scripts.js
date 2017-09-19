$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    //results
    $("#results1").removeClass();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      $("#results1").append(warningSigns + "<br>");
    });

    $("#results2").removeClass();
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var healthSymptoms = $(this).val();
      $("#results2").append(healthSymptoms + "<br>");
    });
    $("#results3").removeClass();
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var copingMethods = $(this).val();
      $("#results3").append(copingMethods + "<br>");
    });
  //end results

  //define inputs into array numbers
    var outcome;
    var warningValue = $("input:checkbox[name=warning-signs]:checked").length;
    $("#outcome").removeClass();







if (warningValue >= 3 ) {
    outcome = "something"

}

  $("#results1").text(outcome)


  });
});
