
$.fn.scrollTop = function(v){
	if (v!=undefined) {
		for (var i=0; i<this.length; i++) {
			this[i].scrollTop = v;
		}
		return this;
	}
	if (this.length) return this[0].scrollTop;
}
