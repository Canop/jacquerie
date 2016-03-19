

$.fn.on = function(eventType, selector, callback, nbEvents){
	if (!callback) {
		callback = selector;
		selector = null;
	} else {
		eventType = enterLeaveEventTypes[eventType] || eventType;
	}
	for (var i=0; i<this.length; i++) {
		delegator(this[i]).bind(this[i], eventType, selector, callback, nbEvents||0);
	}
	return this;
}

$.fn.one = function(eventType, selector, callback){
	return this.on(eventType, selector, callback, 1);
}

$.fn.off = function(eventType, selector, callback){
	if (!callback) {
		callback = selector;
		selector = null;
	} else {
		eventType = enterLeaveEventTypes[eventType] || eventType;
	}
	for (var i=0; i<this.length; i++) {
		delegator(this[i]).unbind(this[i], eventType, selector, callback);
	}
	return this;
}


var enterLeaveEventTypes = {
	"mouseenter": "mouseover",
	"mouseleave": "mouseout"
}
var delegators = new WeakMap;

// returns the delegator handling the events delegated from an element
function delegator(element){
	var delegator = delegators.get(element);
	if (!delegator) {
		delegator = new Delegator;
		delegators.set(element, delegator);
	}
	return delegator;
}

function Delegator(){
	this.typeHandlers = new Map; // eventType->TypeHandler
}

Delegator.prototype.bind = function(top, eventType, selector, callback, nbEvents){
	var typeHandler = this.typeHandlers.get(eventType);
	if (!typeHandler) {
		this.typeHandlers.set(eventType, typeHandler = new TypeHandler(eventType, top));
	}
	typeHandler.bind(selector, callback, nbEvents);
}

Delegator.prototype.unbind = function(top, eventType, selector, callback){
	var typeHandler = this.typeHandlers.get(eventType);
	if (!typeHandler) {
		return;
	}
	typeHandler.unbind(top, selector, callback);
	// TODO unbind and delete the typehandler if it has no handler remaining
}

function TypeHandler(eventType, top){
	this.eventType = eventType;
	this.handlers = [];
	this.globalCallback = (event)=>{
		var matches = this.findMatches(top, event);
		this.dispatch(matches, event);
	};
	top.addEventListener(this.eventType, this.globalCallback);
}

TypeHandler.prototype.bind = function(selector, callback, nbEvents){
	this.handlers.push(new Handler(selector, callback, nbEvents));
}

TypeHandler.prototype.unbind = function(top, selector, callback){
	for (var i=this.handlers.length; i--;) {
		var handler = this.handlers[i];
		if (handler.selector === selector && handler.callback === callback) {
			this.handlers.splice(i, 1);
			break;
		}
	}
}

// keep track of the elements in which we are, in order to avoid sending
// enter events more than necessary
let enteredElements = new WeakSet;

TypeHandler.prototype.findMatches = function(top, event){
	var matches = [];
	var element = event.target;
	while (element) {
		for (let i=0; i<this.handlers.length; i++) {
			let handler = this.handlers[i];
			if (
				handler.selector
				? element!==top && element.matches(handler.selector)
				: element===top
			) {
				if (event.type==="mouseout" && $(element).contains(event)) {
					continue;
				}
				if (event.type==="mouseover" && enteredElements.has(element)) {
					continue;
				}
				matches.push({handler, element});
			}
		}
		if (element===top) break;
		element = element.parentNode;
	}
	return matches;
}

TypeHandler.prototype.dispatch = function(matches, event){
	for (var i=0; i<matches.length; i++) {
		var	match = matches[i],
			handler = match.handler;
		if (!--handler.nbEvents) {
			this.handlers.splice(this.handlers.indexOf(handler), 1);
		}
		if (event.type==="mouseover") {
			enteredElements.add(match.element);
			let leave = function(){
				enteredElements.delete(match.element);
				match.element.removeEventListener("mouseleave", leave);
			}
			match.element.addEventListener("mouseleave", leave);
		}
		var ret = handler.callback.call(match.element, event);
		if (ret === false) {
			event.preventDefault();
			return false;
		}
	}
}

function Handler(selector, callback, nbEvents){
	this.selector = selector;
	this.callback = callback;
	this.nbEvents = nbEvents;
}


