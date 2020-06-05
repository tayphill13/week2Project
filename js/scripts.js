$(document).ready(function() {
  $("form#formOne").submit(function(event)  {
    const preferredDonut = $("#donut").val();
    const morningOrNight = $("#amPm").val();
    
    if (preferredDonut === "fritter") {
      $("#response").text("You would probably enjoy this programming language"); 
    } else if (preferredDonut === "chocBar") {
      $("#response").text("You would probably enjoy this language instead");
    } else {
      $("#response").text("You would probably prefer this third language");
    }
    event.preventDefault();
  })
})