$(document).ready(function(){
	$("#map_link_0").on("mouseenter", function() {
    	$(".signature-0").css("display", "block");
    	$(".signature-1").css("display", "none");
    	$(".signature-2").css("display", "none");
    	$(".signature-3").css("display", "none");
    	$(".signature-4").css("display", "none");
    	$(".signature-5").css("display", "none");
    	$(".signature-6").css("display", "none");
	});
    $("#map_link_1").on("mouseenter", function() {
        $(".signature-0").css("display", "none");
        $(".signature-1").css("display", "block");
        $(".signature-2").css("display", "none");
        $(".signature-3").css("display", "none");
        $(".signature-4").css("display", "none");
        $(".signature-5").css("display", "none");
        $(".signature-6").css("display", "none");
    });
    $("#map_link_2").on("mouseenter", function() {
        $(".signature-0").css("display", "none");
        $(".signature-1").css("display", "none");
        $(".signature-2").css("display", "block");
        $(".signature-3").css("display", "none");
        $(".signature-4").css("display", "none");
        $(".signature-5").css("display", "none");
        $(".signature-6").css("display", "none");
    });
    $("#map_link_3").on("mouseenter", function() {
        $(".signature-0").css("display", "none");
        $(".signature-1").css("display", "none");
        $(".signature-2").css("display", "none");
        $(".signature-3").css("display", "block");
        $(".signature-4").css("display", "none");
        $(".signature-5").css("display", "none");
        $(".signature-6").css("display", "none");
    });
    $("#map_link_4").on("mouseenter", function() {
        $(".signature-0").css("display", "none");
        $(".signature-1").css("display", "none");
        $(".signature-2").css("display", "none");
        $(".signature-3").css("display", "none");
        $(".signature-4").css("display", "block");
        $(".signature-5").css("display", "none");
        $(".signature-6").css("display", "none");
    });
    $("#map_link_5").on("mouseenter", function() {
        $(".signature-0").css("display", "none");
        $(".signature-1").css("display", "none");
        $(".signature-2").css("display", "none");
        $(".signature-3").css("display", "none");
        $(".signature-4").css("display", "none");
        $(".signature-5").css("display", "block");
        $(".signature-6").css("display", "none");
    });
    $("#map_link_6").on("mouseenter", function() {
        $(".signature-0").css("display", "none");
        $(".signature-1").css("display", "none");
        $(".signature-2").css("display", "none");
        $(".signature-3").css("display", "none");
        $(".signature-4").css("display", "none");
        $(".signature-5").css("display", "none");
        $(".signature-6").css("display", "block");
    });

    $("#map_link_0, #map_link_1, #map_link_3, #map_link_4, #map_link_5, #map_link_6").on("mouseleave", function() {
        $(".signature-0").css("display", "none");
        $(".signature-1").css("display", "none");
        $(".signature-2").css("display", "none");
        $(".signature-3").css("display", "none");
        $(".signature-4").css("display", "none");
        $(".signature-5").css("display", "none");
        $(".signature-6").css("display", "none");
    });
	
});