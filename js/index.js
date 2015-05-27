$(function() {
  'use strict';
  $(document).ready(function() {
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

  })
});
