
$.fn.height = function(v){
	if (v !== undefined) {
		return this.css("height", v);
	}
	if (this.length) return this[0].clientHeight;
}

$.fn.width = function(v){
	if (v !== undefined) {
		return this.css("width", v);
	}
	if (this.length) return this[0].clientWidth;
}

