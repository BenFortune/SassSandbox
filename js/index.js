$(function() {
  'use strict';
  $(document).ready(function() {
    var floatLabel = $('#float-label label');
    var floatInput = $('#float-label input');
    var onClass = "float-label-on";
    var showClass = "float-label";

    floatInput.on('focus', function() {
      floatLabelHandler();
    });
    floatInput.on('blur', function() {
      floatLabelHandler();
    });
    floatInput.on('keyup', function() {
      console.log("this is", this);
      floatLabelHandler();
    })

    function floatLabelHandler() {
      if (!floatInput.val() || floatInput.val() === "") {
        floatLabel.removeClass(onClass);
        floatInput.removeClass(showClass);
      } else {
        floatLabel.addClass(onClass);
        floatInput.addClass(showClass);
      }
    }

  })
});
