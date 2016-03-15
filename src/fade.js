
$.fn.fadeIn = function(duration, cb){
	return this.show().css("opacity", 0).animate({opacity:1}, cb);
}

$.fn.fadeOut = function(duration, cb){
	return this.animate({opacity:0}, cb);
}

