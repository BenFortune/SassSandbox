'use strict';

$(function () {

	// BEGIN MUST USE JQUERY FUNCTIONS

	var mySlider = $("#slider").slider();
	mySlider.slider('setValue', 8);
	$('[data-toggle="tooltip"]').tooltip();

	// END MUST USE JQUERY FUNCTIONS

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
						btn = _step.value;

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

	// CUSTOM CHECKBOX CHECKS
	function customCheckboxes() {
		var checkboxes = document.querySelectorAll('.dice-checkbox');
		var checkClass = 'icon-check-1';

		for (var _i = 0; _i < checkboxes.length; _i++) {
			checkboxes[_i].addEventListener('click', function (e) {
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

	// REMOVE/HIDE TAGS
	var tags = document.querySelectorAll('.dice-tag');

	for (var _i2 = 0; _i2 < tags.length; _i2++) {
		tags[_i2].addEventListener('click', function (e) {
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
		tags.on('click', function () {
			$(this).find('.remove').removeClass('remove').focus();
		});
		inputs.on('blur', function () {
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

	// ADDING NEW TAGS
	function addNewTag(tagInput) {
		console.log('tag input is', tagInput);
		var targetEl = $(tagInput).children().last();
		if ($(targetEl).hasClass('add')) {
			return;
		} else {
			var addTagMarkup = '<div class="dice-tag add"><span>+</span>Add Tag <input class="remove" type="text" placeholder="Add Tag"></div>';
			$(tagInput).append(addTagMarkup);
		}
	};

	// ADD NEW INPUTS
	var inputGroup = document.querySelector('.dice-input-group');
	var addBtn = document.querySelector('.dice-input-add');

	addBtn.addEventListener('click', function (e) {
		inputGroup.innerHTML += '<label for="checkbox1" class="checkbox-container"><input class="bootstrap-checkbox" type="checkbox" checked><span class="dice-checkbox icon-check-1"></span>Check me</label>';
		customCheckboxes();
	});

	(function diceToggle() {
		// Initialize default status
		var diceToggle = $('.dice-toggle-control');
		var diceToggleLabel = $('.dice-toggle-label');
		diceToggle.addClass('on');

		// Click event
		diceToggle.on('click', function () {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				diceToggleLabel.text('Off');
			} else {
				$(this).removeClass('off').addClass('on');
				diceToggleLabel.text('On');
			}
		});
	})();
});
//# sourceMappingURL=main.js.map
