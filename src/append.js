// Main differences with jQuery functions:
//  - scripts aren't handled

// TODO we could be much faster when elements is some html by using insertAdjacentHTML
$.fn.append = function(elements){
	let $elements = $(elements);
	for (let i=0; i<this.length; i++) {
		if (i) {
			$elements = $elements.clone();
		}
		for (let j=0; j<$elements.length; j++) {
			this[i].appendChild($elements[j]);
		}
	}
	return this;
}

$.fn.appendTo = function(elements){
	let	$this = this,
		$elements = $(elements);
	for (let i=0; i<$elements.length; i++) {
		if (i) $this = $this.clone();
		for (let j=0; j<$this.length; j++) {
			$elements[i].appendChild($this[j]);
		}
	}
	return this;
}


$.fn.prepend = function(elements){
	let $elements = $(elements);
	for (let i=0; i<this.length; i++) {
		if (i) $elements = $elements.clone();
		for (let j=$elements.length; j--;) {
			this[i].insertBefore($elements[j], this[i].firstChild);
		}
	}
	return this;
}

$.fn.prependTo = function(elements){
	let	$this = this,
		$elements = $(elements);
	for (let i=0; i<$elements.length; i++) {
		if (i) $this = $this.clone();
		for (let j=$this.length; j--;) {
			$elements[i].insertBefore($this[j], $elements[i].firstChild);
		}
	}
	return this;
}
