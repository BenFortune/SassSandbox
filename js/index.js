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
  }());

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

        if ($(this).hasClass('dropdown-caret')) {
          var btnText = $(that).prev();
          clickableElements.on('click', function() {
            btnText.text(this.innerHTML);
          });
        } else {
          clickableElements.on('click', function() {
            that.innerHTML = this.innerHTML;
          });
        }
      } else if (this.hasAttribute('data-select-type') && this.getAttribute('data-select-type') === 'multiple') {
        // TODO Finish Multi Select Work
        var that = this;
        var clickableElements = $('.dropdown-menu li input');
        clickableElements.on('click', function() {
          console.log("values are", this.getAttribute('value'));
          if (valueArray === undefined) {
            var valueArray = [];
            var value = this.getAttribute('value');
            var values = valueArray.push(value);
            var allValues = valueArray;
            $('#multipleBtn').text(valueArray);
            console.log('all values', allValues);
          } else {
            console.log('all values where defined', allValues);
            var value = this.getAttribute('value');
            var values = allValues.push(' ' + value);
            $('#multipleBtn').text(valueArray);
          }
        });

        // TODO resuable function for multiple values

      }
    }
  }());

  // FORM GROUP BUTTON CHANGE
  (function formBtnGroupChange() {
    var channelBtn = $('.dice-btn-group button');

    channelBtn.on('click', function(e) {
      var that = $(this);
      e.preventDefault();
      if (that.hasClass('inactive')) {
        channelBtn.removeClass('active').addClass('inactive');
        that.removeClass('inactive').addClass('active');
      }
    });

  }());

  // CUSTOM CHECKBOX CHECKS
  (function checkboxCheck() {
    var checkboxes = $('.dice-checkbox');
    var realChecks = $('.bootstrap-checkbox');

    checkboxes.on('click', function(e) {
      srcEl = $(e.target);
      if (srcEl.hasClass('icon-check-1')) {
        srcEl.removeClass('icon-check-1');
        srcEl.prev().removeAttr('checked');
      } else {
        srcEl.addClass('icon-check-1');
        srcEl.prev().attr('checked', true);
      }
    });
  }());

  // REMOVE/HIDE TAGS
  (function removeTags() {
    var tags = $('.dice-tag');
    tags.on('click', function(e) {
      srcEl = $(e.target);
      srcEl.parent().addClass('remove');
    })
  }());

});
