import { miscJquery } from './src/misc-jquery';
import { floatLabel } from './src/float-label';
import { toggleButton } from './src/toggle-button';
import { buttonTabs } from './src/button-tabs';
import { customCheckbox } from './src/custom-checkbox';

$(() => {

	// INITIALIZE IMPORTS
	miscJquery();
	floatLabel();
	toggleButton();
	buttonTabs();
	customCheckbox();

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

});
