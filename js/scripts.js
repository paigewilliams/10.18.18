$(function() {
  var gender;
  var date;
  var genderName;
  var genderImage;

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

    if (gender==="male"){
      if (date==="inside"){
        genderName="Abed"
        genderImage="imgs/abed.jpg"
      } else {
        genderName="Jeff Winger"
        genderImage="imgs/jeff.jpg"
      }
    } else if (gender==="female"){
      if (date==="inside"){
        genderName="Annie"
        genderImage="imgs/annie.png"
      } else {
        genderName="Britta"
        genderImage="imgs/britta.jpg"
    }}

      $("#resuts-box img").attr("src",genderImage)
      $("#resuts-box .card-body").html("<h3>"+genderName+"</h3>")
      $("#resuts-box").show();

    event.preventDefault();
  })

})
