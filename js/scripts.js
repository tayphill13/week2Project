$(document).ready(function() {
  $("form#formOne").submit(function(event)  {
    event.preventDefault();
    const userInput = $("input:radio[name=donut]:checked").val();

    if (userInput === "fritter") {
      result = "You would probably enjoy this programming language" 
    }
    
    $("#response").text(result);
  })
})