export function tags() {
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
	function addTag() {
		const addTags = $('.dice-tag.add');
		const addInputs = $('.dice-tag.add input');
		addTags.on('click', function() {
			console.log('removed');
			$(this).find('.remove').removeClass('remove').focus();
			addNewTag();
		});
		addInputs.on('blur', function() {
			const value = $(this).val();
			if (value) {
				const parentEl = $(this).parent().parent();
				$(this).parent().text(value).removeClass('add').append('<span>X</span>');
				addNewTag(parentEl);
				addTag();
			} else {
				return;
			}
		});
	}
	addTag();

	// ADDING NEW TAGS
	function addNewTag(tagInput) {
		const targetEl = $(tagInput).children().last();
		if ($(targetEl).hasClass('add')) {
			return;
		} else {
			const addTagMarkup = '<div class="dice-tag add"><span>+</span>Add Tag <input class="remove" type="text" placeholder="Add Tag"></div>'
			$(tagInput).append(addTagMarkup);
		}
	};
}
