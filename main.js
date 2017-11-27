$( document ).ready(function(){

	$("#linkone").click(function(){
		$('html, body').animate({
			scrollTop: $("#siteredesign").offset().top}, 2000);
	});

	$("#linktwo").click(function(){
		$('html, body').animate({
			scrollTop: $("#statapp").offset().top}, 2000);
	});
	
});