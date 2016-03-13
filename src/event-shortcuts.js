
// FIXME: doesn't seem to work with focus
!["change", "click", "focus", "keydown", "keyup", "resize"].forEach(function(event){
	$.fn[event] = function(s, f){
		if (s) return $.fn.on.call(this, event, s, f);
		else return this.trigger(event);
	};
});
