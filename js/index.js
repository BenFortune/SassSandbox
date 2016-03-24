$(() => {

	// BEGIN MUST USE JQUERY FUNCTIONS

	const mySlider = $("#slider").slider();
		mySlider.slider('setValue', 8);
	$('[data-toggle="tooltip"]').tooltip();

	// END MUST USE JQUERY FUNCTIONS

	// BEGIN Float Label
	const floatInput = document.querySelector('.float-label input');
	const onClass = 'float-label-on';
	const showClass = 'float-label';

	floatInput.addEventListener('focus', (e) => {
		floatLabelHandler.call(e.target, 'something else');
	});

	floatInput.addEventListener('blur', (e) => {
		floatLabelHandler.call(e.target, 'something else');
	});

	floatInput.addEventListener('keyup', (e) => {
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

		toggleTrigger.on('click', function() {
			var that = this;
			getSelectType.call(that, 'oneArg', 'twoArg');
		});

		function getSelectType(button, arg1, arg2) {
			if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'single') {
				var that = this;
				var clickableElements = $('.dropdown-menu li a');

				if ($(this).hasClass('dropdown-caret')) {
					var btnText = $(that).prev();
					clickableElements.on('click', function() {
						btnText.text(this.innerHTML);
					});
				} else {
					clickableElements.on('click', function() {
						that.innerHTML = this.innerHTML;
					});
				}
			} else if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'multiple') {

				// TODO Finish Multi Select Work

				var that = this;
				var clickableElements = $('.dropdown-menu li input');
				clickableElements.on('click', function() {
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
	}());

	// FORM GROUP BUTTON CHANGE
	const channelBtns = document.querySelectorAll('.dice-btn-group-tab button');

	for (let i = 0; i < channelBtns.length; i++) {
		channelBtns[i].addEventListener('click', (e) => {
			e.preventDefault();
			const that = e.target;

			if (that.className === 'btn inactive') {
				for (btn of channelBtns) {
					btn.classList.remove('active');
					btn.classList.add('inactive');
				}
				that.classList.remove('inactive');
				that.classList.add('active');
			}
		});
	}
	// END FORM GROUP BUTTON CHANGE

	// CUSTOM CHECKBOX CHECKS
	function customCheckboxes() {
		const checkboxes = document.querySelectorAll('.dice-checkbox');
		const checkClass = 'icon-check-1';

		for (let i = 0; i < checkboxes.length; i++) {
			checkboxes[i].addEventListener('click', (e) => {
				const that = e.target;

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
	const tags = document.querySelectorAll('.dice-tag');

	for (let i = 0; i < tags.length; i++) {
		tags[i].addEventListener('click', (e) => {
			const that = e.target;

			if (that.className === 'dice-tag add') {
				return;
			} else {
				that.parentNode.classList.add('remove');
				addNewTag(that.parentNode);
			}
		})
	}

	// ADD TAGS
	function addTags() {
		const addTags = $('.dice-tag.add');
		const addInputs = $('.dice-tag.add input');
		tags.on('click', function() {
			$(this).find('.remove').removeClass('remove').focus();
		});
		inputs.on('blur', function() {
			const value = $(this).val();
			if (value) {
				const parentEl = $(this).parent().parent();
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
		const targetEl = $(tagInput).children().last();
		if ($(targetEl).hasClass('add')) {
			return;
		} else {
			const addTagMarkup = '<div class="dice-tag add"><span>+</span>Add Tag <input class="remove" type="text" placeholder="Add Tag"></div>'
			$(tagInput).append(addTagMarkup);
		}
	};

	// ADD NEW INPUTS
	const inputGroup = document.querySelector('.dice-input-group');
	const addBtn = document.querySelector('.dice-input-add');

	addBtn.addEventListener('click', (e) => {
		inputGroup.innerHTML += '<label for="checkbox1" class="checkbox-container"><input class="bootstrap-checkbox" type="checkbox" checked><span class="dice-checkbox icon-check-1"></span>Check me</label>';
		customCheckboxes();

	});

	(function diceToggle() {
		// Initialize default status
		var diceToggle = $('.dice-toggle-control');
		var diceToggleLabel = $('.dice-toggle-label');
		diceToggle.addClass('on');

		// Click event
		diceToggle.on('click', function() {
			if ($(this).hasClass('on')) {
				$(this).removeClass('on').addClass('off');
				diceToggleLabel.text('Off');
			} else {
				$(this).removeClass('off').addClass('on');
				diceToggleLabel.text('On');
			}
		})
	}());

});
