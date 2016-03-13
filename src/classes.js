
$.fn.hasClass = function(c){
	for (var i=0; i<this.length; i++) {
		if (this[i].classList.contains(c)) return true;
	}
	return false;
}

$.fn.addClass = function(c){
	c = c.split(' ');
	var add = DOMTokenList.prototype.add;
	for (var i=0; i<this.length; i++) {
		add.apply(this[i].classList, c);
	}
	// c = c.split(' ');
	// for (var i=0; i<this.length; i++) {
	// 	for (var j=0; j<c.length; j++) this[i].classList.add(c[j]);
	// }
	return this;
}

$.fn.removeClass = function(c){
	c = c.split(' ');
	var remove = DOMTokenList.prototype.remove;
	for (var i=0; i<this.length; i++) {
		remove.apply(this[i].classList, c);
	}
	return this;
}

$.fn.toggleClass = function(c, b){
	return this[b ? "addClass" : "removeClass"](c);
}
