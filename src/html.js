

$.fn.html = function(t){
	if (t!==undefined) {
		for (var i=0; i<this.length; i++) {
			this[i].innerHTML = typeof t === "function"
				? t.call(this[i], i, this[i].innerHTML)
				: t;
		}
		return this;
	}
	return this.length ? this[0].innerHTML : undefined;
}
