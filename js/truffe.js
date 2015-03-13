$(document).ready(function(){
	$(".truffe-1").on("mouseenter", function() {
    	$("#truffe-intro").css("display", "none");
    	$("#truffe-one").css("display", "block");
    	$("#truffe-two").css("display", "none");
    	$("#truffe-three").css("display", "none");
    	$("#truffe-four").css("display", "none");
    	$("#truffe-five").css("display", "none");
    	$("#truffe-six").css("display", "none");
	});
	$(".truffe-2").on("mouseenter", function() {
    	$("#truffe-intro").css("display", "none");
    	$("#truffe-one").css("display", "none");
    	$("#truffe-two").css("display", "block");
    	$("#truffe-three").css("display", "none");
    	$("#truffe-four").css("display", "none");
    	$("#truffe-five").css("display", "none");
    	$("#truffe-six").css("display", "none");
	});
	$(".truffe-3").on("mouseenter", function() {
    	$("#truffe-intro").css("display", "none");
    	$("#truffe-one").css("display", "none");
    	$("#truffe-two").css("display", "none");
    	$("#truffe-three").css("display", "block");
    	$("#truffe-four").css("display", "none");
    	$("#truffe-five").css("display", "none");
    	$("#truffe-six").css("display", "none");
	});
	$(".truffe-4").on("mouseenter", function() {
    	$("#truffe-intro").css("display", "none");
    	$("#truffe-one").css("display", "none");
    	$("#truffe-two").css("display", "none");
    	$("#truffe-three").css("display", "none");
    	$("#truffe-four").css("display", "block");
    	$("#truffe-five").css("display", "none");
    	$("#truffe-six").css("display", "none");
	});
	$(".truffe-5").on("mouseenter", function() {
    	$("#truffe-intro").css("display", "none");
    	$("#truffe-one").css("display", "none");
    	$("#truffe-two").css("display", "none");
    	$("#truffe-three").css("display", "none");
    	$("#truffe-four").css("display", "none");
    	$("#truffe-five").css("display", "block");
    	$("#truffe-six").css("display", "none");
	});
	$(".truffe-6").on("mouseenter", function() {
    	$("#truffe-intro").css("display", "none");
    	$("#truffe-one").css("display", "none");
    	$("#truffe-two").css("display", "none");
    	$("#truffe-three").css("display", "none");
    	$("#truffe-four").css("display", "none");
    	$("#truffe-five").css("display", "none");
    	$("#truffe-six").css("display", "block");
	});
	$(".collection").on("mouseleave", function() {
    	$("#truffe-intro").css("display", "block");
    	$("#truffe-one").css("display", "none");
    	$("#truffe-two").css("display", "none");
    	$("#truffe-three").css("display", "none");
    	$("#truffe-four").css("display", "none");
    	$("#truffe-five").css("display", "none");
    	$("#truffe-six").css("display", "none");
	});
});