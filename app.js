var QRCode = require('qrcode');

const url = 'https://cheezburger.com/20094469/silliest-empty-headed-cat-memes-to-help-you-survive-the-week-april-12-2023';

QRCode.toFile('images/qr.png',url, function (err, url) {
  if(err) return console.log('error');
  else console.log(url);
}) 