
// TODO: support deltas (i.e. "+=15")

let nocssfuns = {
	scrollTop: 1
};

$.fn.animate = function(props, duration, cb){
	var	$this = this,
		startTime = Date.now(),
		vars = [];
	if (typeof duration === "function") {
		cb = duration;
		duration = 400;
	}
	for (let key in props) {
		vars.push({
			key: key,
			startValues: [].map.call(this, e => nocssfuns[key] ? $(e)[key]() : parseInt($(e).css(key))||0),
			endValue: +props[key]
		});
	}
	(function step(){
		var	now = Date.now(),
			progress = (now-startTime)/duration;
		if (progress>1) {
			for (let i=vars.length; i--;) {
				$this.css(vars[i].key, vars[i].endValue);
			}
			if (cb) {
				for (let i=0; i<$this.length; i++) cb.call($this[i]);
			}
			return;
		}
		for (let i=vars.length; i--;) {
			var	v = vars[i];
			for (let j=0; j<$this.length; j++) {
				let	startValue = v.startValues[j],
					value = startValue + (v.endValue-startValue)*progress,
					$e = $($this[j]);
				if (nocssfuns[v.key]) $e[v.key](value);
				else $e.css(v.key, value);
			}
		}
		requestAnimationFrame(step);
	})();
	return this;
}
