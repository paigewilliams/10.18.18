$(function() {
  var gender;
  var date;

  $("#gender").change(function() {
    gender = $("#gender").val();
    $(".date-select").show();

  })
  $("#date").change(function(){
    date = $("#date").val();
    debugger
  })
  $("#matchmaker").submit(function(event) {

    event.preventDefault();
  })

})
