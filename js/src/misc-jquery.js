export function miscJquery() {
	// BEGIN MUST USE JQUERY FUNCTIONS

	const mySlider = $("#slider").slider();
		mySlider.slider('setValue', 8);
	$('[data-toggle="tooltip"]').tooltip();

	// END MUST USE JQUERY FUNCTIONS
}
