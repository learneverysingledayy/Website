$(function() {
	$(".scroll-arrow").click(function() {
		$('html, body').animate({
			scrollTop: $("#section-about").offset().top
		}, 1000);
	});
});