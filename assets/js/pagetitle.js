$(function() {
  	var pageTitle = $("title").text();
	
	$(window).blur(function() {
	  $("title").text("LPDaVinci - ♥");
	});
	
	$(window).focus(function() {
	  $("title").text(pageTitle);
	});
});