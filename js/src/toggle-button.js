export default function toggleButton() {
	// BUTTON TOGGLE ACTIONS
	const diceToggle = document.querySelector('.dice-toggle-control');
	const diceToggleLabel = document.querySelector('.dice-toggle-label');

	diceToggle.classList.add('on');

	diceToggle.addEventListener('click', (e) => {
		const that = e.target;
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
