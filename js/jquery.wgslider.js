$(document).ready(function() {
	//Display paging
	$(".paging").show();
	$(".paging a:first").addClass("active");
	
	var imageWidth = $(".viewer").width();
	var imageSum = $(".slideimages img").size();
	var imageSlideWidth = imageWidth * imageSum;
	
	$(".slideimages").css({'width' : imageSlideWidth});
	
	//Paging  and Slider Function
	rotate = function(){
    var triggerID = $active.attr("rel") - 1;
    var slideimagesPosition = triggerID * imageWidth;

    $(".paging a").removeClass('active');
    $active.addClass('active');

    //Slider Animation
    $(".slideimages").animate({
        left: -slideimagesPosition
    }, 500 );

	}; 
	
	////Rotation and Time
	rotateSwitch = function(){
		play = setInterval(function(){ 
			$active = $('.paging a.active').next(); 
			if ( $active.length === 0) { //When the end is reached
				$active = $('.paging a:first');
			}
			rotate();
		}, 3000); // 4 seconds
	};
	rotateSwitch();

	
});