
// note that it's preferable to use each.
//      $thing.each(function(i, element){ ...
//  is about equivalent to
//      $thing.forEach(function(element, i){ ...
//  with the difference that the context is set to the elemen when using this

$.fn.each = function(fn){
	for (var i=0; i<this.length; i++) {
		fn.call(this[i]);
	}
	return this;
}
