$(document).ready(function() {
  $("form#formOne").submit(function()  {
    let userInput = $("input:radio[name=donutChoice]:checked").val();
    console.log(userInput);
    if (userInput) {
      result = "You would probably enjoy this programming language"; 
    }
    
    $("#response").text(result);
    event.preventDefault();
  })
})