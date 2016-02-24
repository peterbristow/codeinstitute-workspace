$(document).ready(function(){
 // put your code here
 
    $(".theButton").click(function(){
      //$(this).hide();     
      //$(".theButton").not(this).fadeTo("slow", 0.1);
      var colour = $(this).css("background-color");
      $(".superButton")
        .css("background-color", colour)
        .text(colour);
    });
    /*
    $(".superButton").click(function(){
      $(".theButton").fadeTo("slow", 1);
    });
    
    $(".theButton").hover(function(){
      $(this).addClass("black");
    });

    $(".theButton").mouseleave(function(){
      $(this).removeClass("black");
    });
    */
    

});