
// limitations: there's no selector based removal of event handlers

$.fn.on = function(event, selector, callback){
	if (!callback) {
		callback = selector;
		this.forEach(element=>{
			element.addEventListener(event, callback);
		});
		return;
	}
	this.forEach(element=>{
		element.addEventListener(event, (e)=>{
			if (e.target && e.target.matches(selector)) {
				let r = callback.call(e.target, e);
				if (r===false) return false;
			}
		});
	});
	return this;
}

$.fn.off = function(event, callback){
	this.forEach(element=>{
		element.removeEventListener(event, callback);
	});
	return this;
}
