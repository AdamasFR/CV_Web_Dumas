"use strict";

var $btnMail = $("#btn-mail");
$btnMail.removeAttr("disabled");
$btnMail.click(function (evt) {
  evt.preventDefault();
  var salutation = bonsoir.salutation();
  Swal.fire({
    title: 'Email',
    html: salutation + "! Vous pouvez m'envoyer un mail à <strong><a href='mailto:anthony@dumas.cc'>anthony@dumas.cc</a></strong> !",
    imageUrl: './images/mail.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false
  });
});

Sentry.init({ dsn: 'https://42b2e6a9a3e8441983f6d6383fa17c1c@sentry.io/1835040' });
