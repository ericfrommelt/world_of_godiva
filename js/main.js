$(document).ready(function(){
//Fun Facts hover
     $(".fun-fact").on("mouseenter", function() {
       $(this).find(".fun-fact-info").animate({"top": "-196px"}, "fast");
       $(".fun-fact-badge img").animate({"opacity": "0"}, "fast");
     });
     $(".fun-fact").on("mouseleave", function() {
      $(this).find(".fun-fact-info").animate({"top": "-40px"}, "fast");
      $(".fun-fact-badge img").animate({"opacity": "0"}, "fast");
     });

   //Godiva Landscapes image switcher
     $(function(){
      $(".landscape-nav").css( 'cursor', 'pointer' );
      $(".landscape-nav li:eq(0)").nextAll().fadeTo("slow",0.5);
      $(".godiva-landscapes li:eq(0)").nextAll().hide();
      $(".landscape-nav li").click(function(e){
      var index = $(this).index();
      $(".godiva-landscapes li").eq(index).fadeTo("slow", 1.0).siblings().fadeTo("slow", 0);
      $(".landscape-nav li").eq(index).fadeTo("slow", 1.0).siblings().fadeTo("slow", 0.5);
      
      });
   });
});

      