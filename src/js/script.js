var crl = document.getElementById('myCrl').getContext('2d');

crl.beginPath();
crl.arc(60, 100, 40, 0, 2 * Math.PI);
crl.fillStyle = '#00ACC1';
crl.fill();
crl.lineWidth = 1;
crl.strokeStyle = '#dbdbdb';
crl.stroke();

var crl1 = document.getElementById('myCrl1').getContext('2d');

crl1.beginPath();
crl1.arc(60, 100, 40, 0, 2 * Math.PI);
crl1.fillStyle = '#191987';
crl1.fill();
crl1.lineWidth = 1;
crl1.strokeStyle = '#dbdbdb';
crl1.stroke();

var crl2 = document.getElementById('myCrl2').getContext('2d');

crl2.beginPath();
crl2.arc(60, 100, 40, 0, 2 * Math.PI);
crl2.fillStyle = '#000';
crl2.fill();
crl2.lineWidth = 1;
crl2.strokeStyle = '#dbdbdb';
crl2.stroke();