$(document).ready(function() {
  $("form#formOne").submit(function(event)  {
    const userInput = $("input:radio[.donut]:checked").val();
    
    if (userInput === "fritter") {
      return result = "You would probably enjoy this programming language"; 
    } else if (userInput === "chocBar") {
      return result = "You would probably enjoy this language instead";
    } else {
      result = "You would probably prefer this third language";
    }
    event.preventDefault();
    
    $("#response").text(result);
  })
})