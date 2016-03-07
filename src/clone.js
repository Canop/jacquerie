
$.fn.clone = function(){
	return $([].map.call(this, e => e.cloneNode(true)));
	// TODO deduplicate IDs ?
	// TODO duplicate data too ?
}
