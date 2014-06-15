console.log('This would be the main JS file.');
;(function($) {

	// DOM ready
	$(function() {

		// Append the mobile icon nav
		$('.nav').append($('<div class="nav-mobile"></div>'));

		// Add a <span> to every .nav-item that has a <ul> inside
		$('.nav-item').has('ul').prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');

		// Click to reveal the nav
		$('.nav-mobile').click(function(){
			$('.nav-list').toggle();
		});

		// Dynamic binding to on 'click'
		$('.nav-list').on('click', '.nav-click', function(){

			// Toggle the nested nav
			$(this).siblings('.nav-submenu').toggle();

			// Toggle the arrow using CSS3 transforms
			$(this).children('.nav-arrow').toggleClass('nav-rotate');

		});

	});

})(jQuery);
;(function(e){e(function(){e(".nav").append(e('<div class="nav-mobile"></div>'));e(".nav-item").has("ul").prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');e(".nav-mobile").click(function(){e(".nav-list").toggle()});e(".nav-list").on("click",".nav-click",function(){e(this).siblings(".nav-submenu").toggle();e(this).children(".nav-arrow").toggleClass("nav-rotate")})})})(jQuery);
