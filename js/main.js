(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _miscJquery = require('./src/misc-jquery');

var _floatLabel = require('./src/float-label');

var _toggleButton = require('./src/toggle-button');

var _buttonTabs = require('./src/button-tabs');

var _customCheckbox = require('./src/custom-checkbox');

var _customDropdown = require('./src/custom-dropdown');

var _tags = require('./src/tags');

$(function () {

	// INITIALIZE IMPORTS
	(0, _miscJquery.miscJquery)();
	(0, _floatLabel.floatLabel)();
	(0, _toggleButton.toggleButton)();
	(0, _buttonTabs.buttonTabs)();
	(0, _customCheckbox.customCheckbox)();
	(0, _tags.tags)();
	(0, _customDropdown.customDropdown)();
});

},{"./src/button-tabs":2,"./src/custom-checkbox":3,"./src/custom-dropdown":4,"./src/float-label":5,"./src/misc-jquery":6,"./src/tags":7,"./src/toggle-button":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.buttonTabs = buttonTabs;
function buttonTabs() {
	// FORM GROUP BUTTON CHANGE
	var channelBtns = document.querySelectorAll('.dice-btn-group-tab button');

	for (var i = 0; i < channelBtns.length; i++) {
		channelBtns[i].addEventListener('click', function (e) {
			e.preventDefault();
			var that = e.target;

			if (that.className === 'btn inactive') {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = channelBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var btn = _step.value;

						btn.classList.remove('active');
						btn.classList.add('inactive');
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				that.classList.remove('inactive');
				that.classList.add('active');
			}
		});
	}
	// END FORM GROUP BUTTON CHANGE
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.customCheckbox = customCheckbox;
function customCheckbox() {
	// CUSTOM CHECKBOX CHECKS
	function customCheckboxes() {
		var checkboxes = document.querySelectorAll('.dice-checkbox');
		var checkClass = 'icon-check-1';

		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].addEventListener('click', function (e) {
				var that = e.target;

				if (that.className === 'dice-checkbox ' + checkClass) {
					that.classList.remove(checkClass);
					that.previousElementSibling.setAttribute('checked', false);
				} else {
					that.classList.add(checkClass);
					that.previousElementSibling.setAttribute('checked', true);
				}
			});
		}
	}
	customCheckboxes();

	// ADD NEW INPUTS
	var inputGroup = document.querySelector('.dice-input-group');
	var addBtn = document.querySelector('.dice-input-add');

	addBtn.addEventListener('click', function (e) {
		inputGroup.innerHTML += '<label for="checkbox1" class="checkbox-container"><input class="bootstrap-checkbox" type="checkbox" checked><span class="dice-checkbox icon-check-1"></span>Check me</label>';
		customCheckboxes();
	});
}

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.customDropdown = customDropdown;
function customDropdown() {
	// Multi Select and Single Select Dropdown
	(function selectDD() {
		var toggleTrigger = $('.dropdown-toggle');

		toggleTrigger.on('click', function () {
			var that = this;
			getSelectType.call(that, 'oneArg', 'twoArg');
		});

		function getSelectType(button, arg1, arg2) {
			if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'single') {
				var that = this;
				var clickableElements = $('.dropdown-menu li a');

				if ($(this).hasClass('dropdown-caret')) {
					var btnText = $(that).prev();
					clickableElements.on('click', function () {
						btnText.text(this.innerHTML);
					});
				} else {
					clickableElements.on('click', function () {
						that.innerHTML = this.innerHTML;
					});
				}
			} else if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'multiple') {

				// TODO Finish Multi Select Work

				var that = this;
				var clickableElements = $('.dropdown-menu li input');
				clickableElements.on('click', function () {
					console.log("values are", this.getAttribute('value'));
					if (valueArray === undefined) {
						var valueArray = [];
						var value = this.getAttribute('value');
						var values = valueArray.push(value);
						var allValues = valueArray;
						$('#multipleBtn').text(valueArray);
						console.log('all values', allValues);
					} else {
						console.log('all values where defined', allValues);
						var value = this.getAttribute('value');
						var values = allValues.push(' ' + value);
						$('#multipleBtn').text(valueArray);
					}
				});

				// TODO resuable function for multiple values
			}
		}
	})();
}

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.floatLabel = floatLabel;
function floatLabel() {
	// BEGIN Float Label
	var floatInput = document.querySelector('.float-label input');
	var onClass = 'float-label-on';
	var showClass = 'float-label';

	floatInput.addEventListener('focus', function (e) {
		floatLabelHandler.call(e.target, 'something else');
	});

	floatInput.addEventListener('blur', function (e) {
		floatLabelHandler.call(e.target, 'something else');
	});

	floatInput.addEventListener('keyup', function (e) {
		floatLabelHandler.call(e.target, 'something else');
	});

	function floatLabelHandler() {
		if (!this.value || this.value === "") {
			this.classList.remove(showClass);
			this.previousElementSibling.classList.remove(onClass);
		} else {
			this.classList.add(showClass);
			this.previousElementSibling.classList.add(onClass);
		}
	}
	// END Float Label
}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.miscJquery = miscJquery;
function miscJquery() {
	// BEGIN MUST USE JQUERY FUNCTIONS

	var mySlider = $("#slider").slider();
	mySlider.slider('setValue', 8);
	$('[data-toggle="tooltip"]').tooltip();

	// END MUST USE JQUERY FUNCTIONS
}

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.tags = tags;
function tags() {
	// REMOVE/HIDE TAGS
	var tags = document.querySelectorAll('.dice-tag');

	for (var i = 0; i < tags.length; i++) {
		tags[i].addEventListener('click', function (e) {
			var that = e.target;

			if (that.className === 'dice-tag add') {
				return;
			} else {
				that.parentNode.classList.add('remove');
				addNewTag(that.parentNode);
			}
		});
	}

	// ADD TAGS
	function addTags() {
		var addTags = $('.dice-tag.add');
		var addInputs = $('.dice-tag.add input');
		addTags.on('click', function () {
			$(this).find('.remove').removeClass('remove').focus();
		});
		addInputs.on('blur', function () {
			var value = $(this).val();
			if (value) {
				var parentEl = $(this).parent().parent();
				$(this).parent().text(value).removeClass('add').append('<span>X</span>');
				addNewTag(parentEl);
				addTags();
			} else {
				return;
			}
		});
	}
	addTags();

	// ADDING NEW TAGS
	function addNewTag(tagInput) {
		var targetEl = $(tagInput).children().last();
		if ($(targetEl).hasClass('add')) {
			return;
		} else {
			var addTagMarkup = '<div class="dice-tag add"><span>+</span>Add Tag <input class="remove" type="text" placeholder="Add Tag"></div>';
			$(tagInput).append(addTagMarkup);
		}
	};
}

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toggleButton = toggleButton;
function toggleButton() {
	// BUTTON TOGGLE ACTIONS
	var diceToggle = document.querySelector('.dice-toggle-control');
	var diceToggleLabel = document.querySelector('.dice-toggle-label');

	diceToggle.classList.add('on');

	diceToggle.addEventListener('click', function (e) {
		var that = e.target;
		if (that.parentNode.className === 'dice-toggle-control on') {
			that.parentNode.classList.remove('on');
			that.parentNode.classList.add('off');
			diceToggleLabel.textContent = 'Off';
		} else {
			that.parentNode.classList.remove('off');
			that.parentNode.classList.add('on');
			diceToggleLabel.textContent = 'On';
		}
	});
}

},{}]},{},[1]);
