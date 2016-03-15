
$.fn.containsPoint = function(x, y){
	// x -= document.body.scrollLeft;
	// y -= document.body.scrollTop;
	for (var i=0; i<this.length; i++) {
		var	rect = this[i].getBoundingClientRect();
		if (
			x >= rect.left
			&& x <= rect.right
			&& y >= rect.top
			&& y <= rect.bottom
		) return true;
	}
	return false;
}

// Returns true if one of the elements of the collection contains the passed thing(s):
//  $someCollection.contains(54, 3)
//  $someCollection.contains({x:5, y:55})
//  $someCollection.contains(someMouseEvent)
//  $someCollection.contains("#some > .selector")
//  $someCollection.contains(someDomElement(s))
//  $someCollection.contains($someOtherCollection)
$.fn.contains = function(x, y){
	if (typeof x === "object") {
		if (x.x==+x.x && x.y==+x.y) return this.containsPoint(+x.x, +x.y);
		if (x.pageX==+x.pageX && x.pageY==+x.pageY) return this.containsPoint(+x.pageX, +x.pageY);
	} else if (x==+x && y==+y) {
		return this.containsPoint(+x, +y);
	}
	var $other = $(x);
	for (var i=$other.length; i--;) {
		var inside = false;
		for (var j=this.length; j--;) {
			if (this[j].contains($other[i])) {
				inside = true;
				break;
			}
		}
		if (!inside) return false;
	}
	return true;
}
