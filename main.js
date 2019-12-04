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

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      	
      	if(objectBottom < windowBottom){
      		$(this).addClass("fade-ani");
      	} 
    });
  }).scroll(); //invoke scroll-handler on page-load
});