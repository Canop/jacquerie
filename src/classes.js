
$.fn.hasClass = function(c){
	for (var i=0; i<this.length; i++) {
		if (this[i].classList.contains(c)) return true;
	}
	return false;
}

$.fn.addClass = function(c){
	c = c.split(' ');
	for (var i=0; i<this.length; i++) {
		DOMTokenList.add.apply(this[i], c);
	}
	return this;
}

$.fn.removeClass = function(c){
	c = c.split(' ');
	for (var i=0; i<this.length; i++) {
		DOMTokenList.remove.apply(this[i], c);
	}
	return this;
}
