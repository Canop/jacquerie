
!["forEach", "map", "reduce", "some", "every"].forEach(key=>{
	$.fn[key] = Array.prototype[key];
});
