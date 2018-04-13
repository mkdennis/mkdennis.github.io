$( document ).ready(function(){

	$("#linkone").click(function(){
		$('html, body').animate({
			scrollTop: $("#landingpage").offset().top}, 400);
	});

	$("#linktwo").click(function(){
		$('html, body').animate({
			scrollTop: $("#statapp").offset().top}, 1400);
	});

	$("#finalproduct").click(function(){
		$('html, body').animate({
			scrollTop: $("#newsite").offset().top}, 1400);
	});



	
});