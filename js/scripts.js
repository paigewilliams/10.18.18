$(function() {
  var gender;
  var date;

  $("#name").change(function() {
    $("#name").removeClass("alert-danger")
  })

  $("#gender").change(function() {
    gender = $("#gender").val();
    $(".date-select").show();

  })
  $("#date").change(function(){
    date = $("#date").val();
  })

  $("#matchmaker").submit(function(event) {
    if (!$("#name").val()) {
      $("#name").addClass("alert-danger")
      return false;
    }

    console.log(gender, date)

    event.preventDefault();
  })

})
