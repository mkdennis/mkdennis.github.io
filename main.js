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
      var objectBottom = $(this).offset().top;
      	
      	if(objectBottom < windowBottom){
      		$(this).addClass("fade-ani");
      	} 
    });
  }).scroll(); //invoke scroll-handler on page-load
});

//red to blue animation

//just want red block to decrease height with scroll after certain point


$(window).on("load",function() {
	$(window).scroll(function() { //if scroll position changes, call function, not if passed certain point, 

		//scroll top is y = 0, innerHeight is height of window
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		console.log("windowBottom: " + windowBottom);
		console.log("redPosition: " + redPosition)
		if(windowBottom > redPosition){blockgrow(windowBottom);}
	});
	

	var redPosition = $(".red-block").offset().top + ($(".red-block").innerHeight());
	var bluePosition = $(".blue-block").offset().top;
	console.log("redPosition: " + redPosition)


	function blockgrow(x){

			$(".red-block").css("height", function(){
				var a = parseInt($(this).css("height"),10);
				return a - 1;
			})
			$(".blue-block").css("height", function(index){

				var b = parseInt($(this).css("height"),10);
				return b + 1;
			})
	}

});



//when bottom of scroll hits top of object position - fade
// if scroll.position > top of object.position {
//	add fade }