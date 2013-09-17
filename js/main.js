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

     //Video Overlay
     $('a.videoLink').click(function(e) {
       //Intercept the link's default behavior
       e.preventDefault();
       //Create a container
       var container = $('<div class="flowbox"/>');
       //install flowplayer
       container.flowplayer('http://releases.flowplayer.org/swf/flowplayer-3.2.16.swf', $(this).attr('href'));
       //Launch fancybox with the flowplayer as content
       //Be sure to set dimensions and disable autoDimensions & scrolling
       $.fancybox({
           content: container,
           scrolling: 'no',
           'autoSize': false,      
           'width': 900
           
       });
   });

     //Embedded Video Player
      flowplayer("player", "http://releases.flowplayer.org/swf/flowplayer-3.2.16.swf", {
      clip: {
          // these two configuration variables do the trick
          autoPlay: true,
          autoBuffering: true // <- do not place a comma here
      }
  });

});

      