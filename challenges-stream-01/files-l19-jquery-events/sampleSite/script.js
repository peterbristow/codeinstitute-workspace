$(document).ready(function() {
 //
 // add your jQuery code here
   $("#button2").addClass("makeRed");
   
   $("#button2").mouseenter(1000,function(){
       $(this).removeClass("makeRed").addClass("makeBorder");
   })
   
   $("#button2").mouseleave(1000,function(){
       $(this).addClass("makeRed").removeClass("makeBorder");
   })
   
   $("#button2").click(function(){
       $("p").slideToggle(1000);
   })
   
 /*
    $("p").click(function(){
        $("p").addClass("pcolor");
    });
    
    $("h2").hover(function(){
        $("h2").addClass("h2bg");
        $("#first-h2").css("font-size","32px");
    });

    $("button").hover(function() {
        $("body").css("background-color", "black");
    });
    
    $("button").mouseleave(function(){
        $("body").css("background-color", "grey");
    });
    
   $("#button1").click(function() {
       $("p").slideToggle(1000);
   });
   
   $("#button1").mouseenter(function(){
      $(this).fadeTo("fast", 0.5);
   });
   
   $("#button1").mouseleave(function(){
      $(this).fadeTo("fast", 1);
   });
*/
}); 
