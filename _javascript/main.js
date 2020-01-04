var $btnMail = $("#btn-mail");

$btnMail.removeAttr("disabled");

$btnMail.click(function (evt) {
  evt.preventDefault();
  var bonsoir = new Bonsoir(bonsoirFR);
  var salutation = bonsoir.salutation();
  Swal.fire({
    title: 'Email',
    html: salutation + "! Vous pouvez m'envoyer un mail à <strong><a href='mailto:anthony@dumas.cc'>anthony@dumas.cc</a></strong> !",
    imageUrl: './images/mail.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false
  })
});