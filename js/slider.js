$(document).ready(function(){
		
    $(function() {
        $('#slideshow').cycle({
            fx:     'scrollHorz',
            speed:  400,
            timeout: 6000,
            cleartypeNoBg: true,
            pager:  '#nav',
            pagerAnchorBuilder: function paginate(idx, el) {
    			return '<a class="slide' + idx + '" href="#" >&bull;</a>';
    }
        });
    });

    $(function() {
        $('#slideshow2').cycle({
            fx:     'scrollHorz',
            speed:  400,
            timeout: 6000,
            cleartypeNoBg: true,
            pager:  '#nav2',
            pagerAnchorBuilder: function paginate(idx, el) {
                return '<a class="slide' + idx + '" href="#" >&bull;</a>';
    }
        });
    });

    $(function() {
        $('#slideshow3').cycle({
            fx:     'scrollHorz',
            speed:  400,
            timeout: 6000,
            cleartypeNoBg: true,
            pager:  '#nav3',
            pagerAnchorBuilder: function paginate(idx, el) {
                return '<a class="slide' + idx + '" href="#" >&bull;</a>';
    }
        });
    });

});

		