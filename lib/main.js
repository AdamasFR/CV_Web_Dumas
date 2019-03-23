"use strict";

var $btnMail = $("#btn-mail");

$btnMail.removeAttr("disabled");

$btnMail.click(function (evt) {
  evt.preventDefault();
  swal({
    text: "anthony@dumas.cc",
    icon: "info",
    button: true
  });
});