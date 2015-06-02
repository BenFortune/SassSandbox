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

  toggleTrigger.on('click', function() {
    var that = this;
    getSelectType.call(that, 'oneArg', 'twoArg');
  });

  function getSelectType(button, arg1, arg2) {
    if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'single') {
      var that = this;
      var clickableElements = $('.dropdown-menu li a');
      clickableElements.on('click', function() {
        that.innerHTML = this.innerHTML;
      });
    } else if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'multiple') {
      var that = this;
      var clickableElements = $('.dropdown-menu li input');
      clickableElements.on('click', function() {
        console.log("values are", this.getAttribute('value'));
        syncItems();
      });
      function syncItems() {
        var stuff = clickableElements.toArray();
        stuff.forEach(function(el, index, array) {
          if (clickableElements[index].getAttribute('checked') === true) {
            console.log('yep');
          } else {
            console.log('nope');
          }
        });
      }
    } else {
      console.log('neither');
      return;
    }
  }
}

// Intiate Functions
floatLabel();
selectDD();
});
