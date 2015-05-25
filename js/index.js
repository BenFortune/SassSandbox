$(function() {
  'use strict';
  console.log("function executed");
  $(document).ready(function() {
    var floatInput = $('.form-group input');
    var onClass = "float-label";
    var showClass = "float-label-on";

    floatInput.on('focus', function() {
      focusHandler();
    });
    floatInput.on('blur', function() {
      blurHandler();
    });

    function focusHandler() {
      if (this.val() === "" || this.val() === undefined) {
        console.log("focused - value is nothing");
        this.removeClass('float-label-on');
        this.sibling().removeClass('float-label');
      } else {
        console.log("focused - value is something");
        this.addClass('float-label-on');
        this.sibling().addClass('float-label');
      }
    }

    function blurHandler() {
      if (this.val() === "" || this.val() === undefined) {
        console.log("blurred - value is nothing");
        this.removeClass('float-label-on');
        this.sibling().removeClass('float-label');
      } else {
        console.log("blurred - value is something");
        this.addClass('float-label-on');
        this.sibling().addClass('float-label');
      }
    }
  })
});
