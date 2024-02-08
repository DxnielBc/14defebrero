const vuttonSi = document.getElementById('yes');
const vuttonNo = document.getElementById('no');

const zomosNobios = () => {
    alert('💞En tonces tenemos una cita para el 14 de febrero!💞');
    alert('te amo con todo mi corazon, eres lo mejor de mi vida!');
    location.href = 'https://open.spotify.com/track/5QSYWruQQ7kBCHScI4xJ9g?si=c7YqtgLuQ2uW4x84I5E5bg';
};

const ebitarKCRompaMyBobo = () => {
    vuttonNo.style.position = 'absolute';
    vuttonNo.style.top = (Math.random() * window.innerHeight + 'px');
    vuttonNo.style.left = (Math.random() * window.innerWidth + 'px');
};

vuttonSi.addEventListener('click', zomosNobios);
vuttonNo.addEventListener('mouseover', ebitarKCRompaMyBobo);