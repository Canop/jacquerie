
var nopx = [ // css properties which don't need a unit
	"column-count",
	"fill-opacity",
	"flex-grow",
	"flex-shrink",
	"font-weight",
	"opacity",
	"z-index",
].reduce((s, n) => s.add(n).add(n.replace(/-(\w)/g, (_, c) => c.toUpperCase())), new Set);

// difference with jQuery:
//  $(element).css() is a shortcut for window.getComputedStyle(element)
$.fn.css = function(a, b){
	for (var i=0; i<this.length; i++) {
		if (!a) return window.getComputedStyle(this[i]);
		if (b != undefined) {
			if (typeof b === "function") {
				this[i].style.setProperty(
					a,
					b.call(this[i], i, window.getComputedStyle(this[i]).getPropertyValue(a))
				);
			} else {
				if (b == +b && !nopx[a]) b += 'px';
				this[i].style.setProperty(a, b);
			}
			continue;
		}
		if (typeof a === "string") {
			return window.getComputedStyle(this[i]).getPropertyValue(a);
		}
		for (var key in a) {
			var val = a[key];
			if (val == +val && !nopx[key]) val += 'px';
			this[i].style.setProperty(key, val);
		}
	}
	return this;
}
