$(document).ready(function() {
  $("form#formOne").submit(function(event)  {
    const preferredDonut = $("#donut").val();
    const morningOrNight = $("#amPm").val();
    
    if ((preferredDonut === "fritter") && (morningOrNight === "am")) {
        $("#response").text("Ever heard of C#??  Developed by Microsoft as part of it's .net initiative.  The most recent version, 8.0 was    released in 2019 alongside Visual Studio 2019 version 16.3"); 
    } 	else if ((preferredDonut === "fritter") && (morningOrNight === "pm"))	{
    	  $("#response").text("How about Rust?  Developed by Mozilla, it's a language focused on performance and safety, especially keeping your currency safe!  It is syntactically similar to C++.");
    }	  else if (preferredDonut === "chocBar") {
      	$("#response").text("Try Python! It's a high-level, general-purpose programming language that was first released in 1991.");
    } 	else if (preferredDonut === "creme")  {
      	$("#response").text("How about looking into the Ruby, programming language?  It was developed in the mid-90's by Yukihiro 'Matz' Matsumoto in Japan, who thought that it would help programmers focus on providing what the user needs, not what the computer needs.");
    } 	else if (preferredDonut === "glaze") {
      	$("#response").text("Old-Fashioned eh?  Maybe start out with some HTML and CSS to get the basics first.  Then try to implement some JavaScript!");
    } 	else {
      	alert("You have to fill out all the questions for a proper match!");
    }
    event.preventDefault();
  })
})