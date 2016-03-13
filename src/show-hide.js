
$.fn.hide = function(){
	for (var i=0; i<this.length; i++) {
		this[i].style.display = "none";
	}
	return this;
}

$.fn.show = function(){
	for (var i=0; i<this.length; i++) {
		this[i].style.display = "";
	}
	return this;
}

$.fn.toggle = function(){
	for (var i=0; i<this.length; i++) {
		this[i].style.display = this[i].style.display === "none" ? "" : "none";
	}
	return this;
}
