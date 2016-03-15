
// arguments: [deep(boolean)], target, other objects to add
// As the goal was to roughtly implement jQuery's behavior, the
// implementation is more or less copied from jQuery.
$.extend = function(){
	let	i = 1,
		deep = false,
		target = arguments[0];
	if (typeof target === "boolean") {
		deep = target;
		target = arguments[i++] || {};
	}
	if (typeof target !== "object") {
		target = {};
	}
	for (; i<arguments.length; i++) {
		var ext = arguments[i];
		if (ext == null) continue;
		for (var key in ext) {
			var src = target[key];
			var copy = ext[key];
			var copyIsArray;
			if (target === copy) continue;
			if (deep && copy && (typeof copy === "object" || (copyIsArray=Array.isArray(copy)))) {
				var clone;
				if (copyIsArray) {
					clone = src && Array.isArray(src) ? src : [];
				} else {
					clone = src && (typeof src === "object") ? src : {};
				}
				target[key] = $.extend(deep, clone, copy);
			} else if (copy !== undefined) {
				target[key] = copy;
			}
		}
	}
	return target;
}

