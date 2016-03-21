

$.fn.slideDown = function(duration, cb){
	[].forEach.call(this, function(e){
		var	h = e.offsetHeight,
			o = e.style.overflow;
		console.log("start:", h, o);
		$(e).css({height:0, overflow:"hidden"}).animate({height:h}, duration, function(){
			console.log("end of slide down");
			e.style.overflow = o;
			if (cb) cb.call(e);
		});
	});
	return this;
}

$.fn.slideUp = function(duration, cb){
	console.log("slideUp", this);
	[].forEach.call(this, function(e){
		var	o = e.style.overflow;
		console.log("start:", o);
		$(e).css({height:0, overflow:"hidden"}).animate({height:0}, duration, function(){
			console.log("end of slide down");
			e.style.overflow = o;
			if (cb) cb.call(e);
		});
	});
	return this;
}
