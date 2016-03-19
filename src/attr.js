
$.fn.attr = function(n, v){
	if (v===undefined) {
		if (typeof n!=="object") {
			return this.length ? this[0].getAttribute(n) : undefined;
		}
		for (var key in n) {
			this.attr(key, n[key]);
		}
	} else {
		for (var i=0; i<this.length; i++) {
			this[i].setAttribute(n, v);
		}
	}
	return this;
}
