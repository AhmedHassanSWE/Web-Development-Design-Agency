$(function () {
	'use strict';
	var winH   = $(window).height(),
		upperH = $('.upper-bar').innerHeight(),
		navH   = $('.navbar').innerHeight();

	$('.slider, .carousel-item').height( winH - (upperH + navH) );
});
$(function () {
	var winW = $(window).width();
	'use strict';
	$('.shuffle-images').width(winW + 15);
});