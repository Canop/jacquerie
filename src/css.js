

// difference with jQuery:
//  $(element).css() is a shortcut for window.getComputedStyle(element)

$.fn.css = function(a, b){
	for (var i=0; i<this.length; i++) {
		if (!a) return window.getComputedStyle(this[i]);
		if (b) {
			if (typeof b === "function") {
				this[i].style.setProperty(
					a,
					b.call(this[i], i, window.getComputedStyle(this[i]).getPropertyValue(a))
				);
			} else {
				this[i].style.setProperty(a, b);
			}
			continue;
		}
		if (typeof a === "string") {
			return window.getComputedStyle(this[i]).getPropertyValue(a);
		}
		for (var key in a) {
			this[i].style.setProperty(key, a[key]);
		}
	}
	return this;
}
