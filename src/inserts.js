
$.fn.replaceWith = function(s){
	this.before(s);
	return this.remove();
}

$.fn.insertBefore = function(s){
	let	$this = this,
		$elements = $(s);
	for (let i=0; i<$elements.length; i++) {
		if (i) $this = $this.clone();
		var ref = $elements[i];
		if (!ref.parentNode) continue;
		for (var j=this.length; j--;) {
			ref.parentNode.insertBefore(this[i], ref);
			ref = this[i];
		}
	}
	return this;
}

$.fn.before = function(s){
	var $elements = $(s);
	for (var i=0; i<this.length; i++) {
		if (i) $elements = $elements.clone();
		var ref = this[i];
		if (!ref.parentNode) continue;
		for (var j=$elements.length; j--;) {
			ref.parentNode.insertBefore($elements[i], ref);
			ref = $elements[i];
		}
	}
	return this;
}

$.fn.insertAfter = function(s){
	let	$this = this,
		$elements = $(s);
	for (let i=0; i<$elements.length; i++) {
		if (i) $this = $this.clone();
		var parent = $elements[i].parentNode;
		if (!parent) continue;
		var ref = $elements[i].nextElementSibling;
		for (var j=this.length; j--;) {
			parent.insertBefore(this[i], ref);
			ref = this[i].nextElementSibling;
		}
	}
	return this;
}

$.fn.after = function(s){
	var $elements = $(s);
	for (var i=0; i<this.length; i++) {
		if (i) $elements = $elements.clone();
		var parent = this[i].parentNode;
		if (!parent) continue;
		var ref = this[i].nextElementSibling;
		for (var j=$elements.length; j--;) {
			parent.insertBefore($elements[i], ref);
			ref = $elements[i].nextElementSibling;
		}
	}
	return this;
}

