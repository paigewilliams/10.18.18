$(function() {
  $("#animal").change(function(){
    var option = $("#animal").val();

  if (option === "insects"){
    $(".card").hide();

    $("#" + option + "-card").show();
  }
  else if (option === "snakes"){
    $(".card").hide();

    $("#" + option + "-card").show();
  }
  else if (option === "turtles"){
    $(".card").hide();

    $("#" + option + "-card").show();
  }
  });


})
