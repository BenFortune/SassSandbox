export default function miscJquery() {
	// BEGIN MUST USE JQUERY FUNCTIONS

	const mySlider = $("#slider").slider();
		mySlider.slider('setValue', 8);
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	// END MUST USE JQUERY FUNCTIONS
}
