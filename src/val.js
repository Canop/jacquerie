
$.fn.val = function(value){
	if (value===undefined) {
		return this.length ? this[0].value : undefined;
	}
	for (var i=0; i<this.length; i++) {
		this[i].value = value;
	}
	return this;

}
