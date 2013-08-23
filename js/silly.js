var SILLY = (function(module) {

	module.Time = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
	};

	return module;
}(SILLY || {}));
