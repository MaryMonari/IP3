$(document).ready(function() {
  $("#mine").submit(function(event){
    var number1 =parseInt($("#enter").val());

    for (var x=1; x<=number1; x++) {
      if(x%3 ===0 && x%5 ===0){
        $("#output").append("<li>pingpong</li>");
      }
      else if(x%3 ===0){
        $("#output").append("<li>" + "ping" + "</li>");
      }
      else if(x%5 ===0){
        $("#output").append("<li>" + "pong" + "</li>");
      }
      else{
        $("#output").append("<li>" + x +"</li>");
      }
    }

    event.preventDefault();
  });

});
