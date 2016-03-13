
// the current implementation uses CSS transitions
// It might have side effects (erasing other transitions ?)
// If that's the case, we'll use a simple requestAnimationFrame loop
$.fn.fade = function(start, end, duration, cb){
	if (typeof duration === "function") {
		cb = duration;
		duration = 0;
	}
	if (!duration) {
		duration = ".4s";
	} else if (duration==+duration) {
		duration += "ms";
	}
	for (var i=0; i<this.length; i++) {
		var style = this[i].style;
		style.opacity = start;
		style.transition = "opacity "+duration;
		style.opacity = end;
	}
	return this;
}

$.fn.fadeIn = function(duration, cb){
	return this.fade(0, 1, duration, cb);
}

$.fn.fadeOut = function(duration, cb){
	return this.fade(1, 0, duration, cb);
}

