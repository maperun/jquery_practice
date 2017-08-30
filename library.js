$(document).ready(function() {

	$("body").css("background-color", "whitesmoke");

	$("h1").hide();
	$("h1").fadeIn(4000);	

	$(".fade").fadeOut(2000);
	$(".fade").fadeIn(2000);	

	$("p").css("color", "darkgreen");

	$("img").hide();
	$("img").fadeIn(4000);

	$("img").css("border", "2px solid black");

	$(".slide").animate({
		left:"580px"
	})

	$(".hover").hover(function() {
    $(".hover").css("color", "purple")
});

  $('.click').on('click', function() {
    $(this).text('Good Job!');
	});

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

	