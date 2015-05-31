$(document).ready(function() {

// Float Label
function floatLabel() {
  var floatLabel = $('.float-label label');
  var floatInput = $('.float-label input');
  var inputArray = Array.prototype.slice.call(document.querySelectorAll('.float-label input'));
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
  var toggleTrigger = $('.dropdown-toggle');
  var toggleArray = Array.prototype.slice.call(document.querySelectorAll('.dropdown-toggle'));

  toggleTrigger.on('click', function() {
    getSelectType();
  });

  function getSelectType() {
    toggleArray.forEach(function(el, index, array) {
      if(toggleArray[index].hasAttribute('data-select-type') && toggleArray[index].getAttribute('data-select-type') === 'single') {
        console.log("singles", el);
      } else if (toggleArray[index].hasAttribute('data-select-type') && toggleArray[index].getAttribute('data-select-type') === 'multiple') {
        console.log("multiples", el);
      } else if (!toggleArray[index].hasAttribute('data-select-type')){
        console.log("nothing", el);
        return;
      }
    });
  }
}

// Intiate Functions
floatLabel();
selectDD();
});
