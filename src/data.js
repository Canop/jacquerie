

var dataCache = new WeakMap;
$.fn.data = function(key, val){
	if (this.length===0) return arguments.length===1 ? undefined : this;
	if (this.length>1) {
		console.log('Warning: $.fn.dat called on a collection with several elements', this);
	}
	var oc = dataCache.get(this.get(0));
	if (!oc) {
		oc = new Map;
		dataCache.set(this.get(0), oc);
	}
	if (arguments.length===1) {
		return oc.get(key);
	} else {
		oc.set(key, val);
		return this;
	}
}
