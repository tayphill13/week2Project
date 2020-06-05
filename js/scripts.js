$(document).ready(function() {
  $("form#formOne").submit(function()  {
    event.preventDefault();

    let userInput = $("#donut").val();
    let cocktail = $("input[name=mixedDrink]:checked").val();
    console.log(userInput);
    console.log(cocktail);
    $("#response").text(userInput);
  })
})