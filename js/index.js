$(document).ready(function() {

// Float Label
function floatLabel() {
  var floatLabel = $('#float-label label');
  var floatInput = $('#float-label input');
  var onClass = "float-label-on";
  var showClass = "float-label";

  floatInput.on('focus', function() {
    floatLabelHandler.call(floatLabel, 'something else');
  });
  floatInput.on('blur', function() {
    floatLabelHandler.call(floatLabel, 'something else');
  });
  floatInput.on('keyup', function() {
    floatLabelHandler.call(floatLabel, 'something else');
  });

  function floatLabelHandler() {
    if (!floatInput.val() || floatInput.val() === "") {
      this.removeClass(onClass);
      this.next().removeClass(showClass);
    } else {
      this.addClass(onClass);
      this.next().addClass(showClass);
    }
  }
}

// Multi Select and Single Select Dropdown
function selectDD() {
  console.log("Select DD Initialized")
}

// Intiate Functions
floatLabel();
selectDD();
});
