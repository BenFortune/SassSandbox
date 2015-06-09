$(document).ready(function() {

var mySlider = $("#slider").slider();
    mySlider.slider('setValue', 8);

// Float Label
(function floatLabel() {
  var floatInput = $('.float-label input');
  var onClass = "float-label-on";
  var showClass = "float-label";

  floatInput.on('focus', function(e) {
    floatLabelHandler.call(e.target, 'something else');
  });
  floatInput.on('blur', function(e) {
    floatLabelHandler.call(e.target, 'something else');
  });
  floatInput.on('keyup', function(e) {
    floatLabelHandler.call(e.target, 'something else');
  });

  function floatLabelHandler() {
    if (!this.value || this.value === "") {
      $(this).removeClass(showClass);
      $(this).prev().removeClass(onClass);
    } else {
      $(this).addClass(showClass);
      $(this).prev().addClass(onClass);
    }
  }
})();

// Multi Select and Single Select Dropdown
(function selectDD() {
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
      var valueArray = [];
      clickableElements.on('click', function() {
        console.log("values are", this.getAttribute('value'));
        syncItems();
      });
      function syncItems() {
        var stuff = clickableElements.toArray();
        stuff.forEach(function(el, index, array) {
          if (clickableElements.is(':checked')) {
            var values = clickableElements.val();
            console.log('values are', clickableElements.val());
            var stuffVal = valueArray.push(values);
            console.log("yep");
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
})();

});
