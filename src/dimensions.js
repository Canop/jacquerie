

!["width", "height"].forEach(function(dim){
	var Dim = dim[0].toUpperCase()+dim.slice(1);
	$.fn[dim] = function(v){
		if (v !== undefined) {
			return this.css(dim, v);
		}
		if (this.length) {
			var e = this[0];
			if (this[0]===window) {
				console.log("window!", window.innerWidth);
			}
			return e[(e!==window ? "client" : "inner") + Dim]; // does that cover every case ?
		}
	}
	$.fn["outer"+Dim] = function(v){
		if (this.length) return this[0]["offset"+Dim];
	}
});

