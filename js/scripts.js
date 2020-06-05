$(document).ready(function() {
  $("form#formOne").submit(function()  {
    const userInput = $("input[name=donutChoice]:checked").val();
    
    if (userInput === "fritter") {
      result = "You would probably enjoy this programming language"; 
    } else if (userInput === "chocBar") {
      result = "You would probably enjoy this language instead";
    }
    
    $("#response").text(result);
    event.preventDefault();
  })
})