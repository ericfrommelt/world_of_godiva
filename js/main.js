

   $(document).ready(function(){

      //Slider
      var sudoSlider = $("#slider").sudoSlider({
         numeric: true,
         customLink:'a.customLink',
         prevNext:true,
         beforeAnimation: function(slide){
            $('div.descrip-text #anistate').text('Animating to slide ' + slide).show(600);
         },
         afterAnimation: function(slide){
            $('div.descrip-text #anistate').hide(400);
            $('div.descrip-text #slidenumber').text(slide);
            //var text = $(this).children().attr('src');
            //$('div.descrip-text #slidehtml').text(text);
         },
         initCallback: function() {
            var slide = this.getValue("currentSlide");
            $('div.descrip-text #slidenumber').text(slide);

           // var text = this.getSlide(slide).children().attr('src');
            //$('div.descrip-text #slidehtml').text(text);
         }
      });
   });

      