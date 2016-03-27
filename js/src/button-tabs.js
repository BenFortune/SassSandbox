export function buttonTabs() {
	// FORM GROUP BUTTON CHANGE
	const channelBtns = document.querySelectorAll('.dice-btn-group-tab button');

	for (let i = 0; i < channelBtns.length; i++) {
		channelBtns[i].addEventListener('click', (e) => {
			e.preventDefault();
			const that = e.target;

			if (that.className === 'btn inactive') {
				for (let btn of channelBtns) {
					btn.classList.remove('active');
					btn.classList.add('inactive');
				}
				that.classList.remove('inactive');
				that.classList.add('active');
			}
		});
	}
	// END FORM GROUP BUTTON CHANGE
}
