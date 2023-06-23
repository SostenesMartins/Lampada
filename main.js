const photo = document.querySelector('.photo');
const btnOnOff = document.querySelector('.btnOnOff');
let quebrou = false

function lampadaOn() {
    if (quebrou) {
        return
    } else {
        photo.src = './img/ligada.jpg'; 
    }
}

function lampadaOff() {
    if (quebrou) {
        return
    } else {
        photo.src = './img/desligada.jpg';
    }
}

function lampadaQuebrada() {
    quebrou = true
    photo.src = './img/quebrada.jpg';
    btnOnOff.textContent = 'Quebrou'
}

function onOff() {
    if (quebrou) return

    if(btnOnOff.textContent === 'Ligar') {
        lampadaOn()
        btnOnOff.textContent = 'Desligar'
    } else {
        lampadaOff()
        btnOnOff.textContent = 'Ligar'
    }
}

photo.addEventListener('mouseout', lampadaOff)
photo.addEventListener('mouseover', lampadaOn)
photo.addEventListener('dblclick', lampadaQuebrada);
btnOnOff.addEventListener('click', onOff);