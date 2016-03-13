
$.fn.find = function(s){
	var 	set = new Set,
		arr = [];
	for (var i=0; i<this.length; i++) {
		var arri = $.queryAll(this[i], s);
		for (var j=0; j<arri.length; j++) {
			if (set.has(arri[j])) continue;
			set.add(arri[j]);
			arr.push(arri[j]);
		}
	}
	return $(arr);
}
