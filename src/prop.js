
$.fn.prop = function(n, v){
	if (v===undefined) {
		if (typeof n!=="object") {
			return this.length ? this[0].prop[n] : undefined;
		}
		for (var key in n) this.prop(key, n[key]);
	}
	for (var i=0; i<this.length; i++) {
		this[i][n] = v;
	}
	return this;
}
