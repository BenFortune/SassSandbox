export function customCheckbox() {
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

	// ADD NEW INPUTS
	const inputGroup = document.querySelector('.dice-input-group');
	const addBtn = document.querySelector('.dice-input-add');

	addBtn.addEventListener('click', (e) => {
		inputGroup.innerHTML += '<label for="checkbox1" class="checkbox-container"><input class="bootstrap-checkbox" type="checkbox" checked><span class="dice-checkbox icon-check-1"></span>Check me</label>';
		customCheckboxes();
	});
}
