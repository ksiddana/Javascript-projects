//Add your Javascript code here
/*
Date: 11/20/2015 - Attempt at more practise with Forms and jQuery
http://api.jquery.com/submit/
https://www.codecademy.com/en/tracks/projects
*/

$(document).ready(function() {
  
  $('form').submit(function(event) {
    event.preventDefault();
    
    var firstName = $('input:first').val();
    // var radioButton = $('input:radio[name=bar]:checked').val();
    var radioButtonValue = $('input:radio').val();
    var skillsArray = $("input:checkbox:checked").val();
    var formElements = [];

    $('ul').each(function(node){
    	console.log(node);
    	// formElements.push(node.val());
    });
    
    $('.output span').append("First Name: " + firstName + "<br>").show();
    $('.output span').append("Checked Item: " + skillsArray + "<br>").show();
    
//    $('.output span').append("Not valid!").show().fadeOut( 1000 );
    console.log(radioButtonValue);
    event.preventDefault();  
    
  }); //end of Submit Button Click Handler
  
}); //end of document ready function