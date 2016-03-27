export function floatLabel() {
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
}
