$(function() {
  $("#animal").change(function(){
    var option = $("#animal").val();
  
  if (option === "insects"){
    console.log("hi");
  }
  else if (option === "snakes"){
    console.log("hey");
  }
  else if (option === "turtles"){
    console.log("hola");
  }
  });


})
