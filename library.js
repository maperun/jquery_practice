$(document).ready(function() {

// change background color
	$("body").css("background-color", "whitesmoke");

// Make heading fade-in 
	$("h1").hide();
	$("h1").fadeIn(4000);	

// Make .fade element fade-out, then fade-in
	$(".fade").fadeOut(2000);
	$(".fade").fadeIn(2000);	

// Change color of paragraphs 
	$("p").css("color", "darkgreen");

// Hide img, then make it fade-in
	$("img").hide();
	$("img").fadeIn(4000);

// Create border around img
	$("img").css("border", "2px solid black");

// Make .slide element slide over image
	$(".slide").animate({
		left:"580px"
	})

// Make (.hover) text turn purple when you hover over it
	$(".hover").hover(function() {
    $(".hover").css("color", "purple")
});

// Change (.click) text when you click on it
  $('.click').on('click', function() {
    $(this).text('Good Job!');
	});

// Make (.box) element expand and shrink when clicked
	$(".box").click(function() {

		$(".box").animate( {
			width: "100%",				
			height: 200,
		}, 2000, function() {	

			$(".box").animate( {
				width: 100,
				height: 50,
				opacity: 0.5
			},	2000);				
		
 		});

	});

});

	