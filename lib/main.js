"use strict";

var $btnMail = $("#btn-mail");

$btnMail.removeAttr("disabled");

$btnMail.click(function (evt) {
  evt.preventDefault();
  Swal.fire({
    title: 'Email',
    html: "Vous pouvez m'envoyer un mail à <strong>anthony@dumas.cc</strong> !",
    imageUrl: './images/mail.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false
  });
});