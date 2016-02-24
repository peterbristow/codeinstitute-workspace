$(document).ready(function() {
      //$("tr:odd").addClass("odd-bg");
      //$("tr:even").addClass("even-bg");
      
      $("th").click(function(){
            $("td").css("background-color", "white");
            $(this).siblings().css("background-color", "yellow");
      });
});