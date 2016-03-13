

$.fn.siblings = function(s){
	var 	set = new Set,
		arr = [];
	for (var i=0; i<this.length; i++) {
		set.add(this[i]);
		var arri = this[i].parentNode.children;
		for (var j=0; j<arri.length; j++) {
			var e = arri[j];
			if (set.has(e)||(s && !e.matches(s))) continue;
			set.add(e);
			arr.push(e);
		}
	}
	return $(arr);
}
