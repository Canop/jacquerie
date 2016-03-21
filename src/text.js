
$.fn.text = function(t){
	if (t!==undefined) {
		for (var i=0; i<this.length; i++) {
			this[i].textContent = typeof t === "function"
				? t.call(this[i], i, this[i].textContent)
				: t;
		}
		return this;
	}
	return [].map.call(this, e => e.textContent).join(' ');
}
