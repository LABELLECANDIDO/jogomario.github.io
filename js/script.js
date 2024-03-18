const mario = document.querySelector('.mario'); //seleciona a imagem do mario
const pipe = document.querySelector('.pipe') //obstaculo

const jump = () => { //define a classe do pulo
mario.classList.add('jump'); //adiciona a classe ao elemento mario

setTimeout(() => {

    mario.classList.remove('jump'); //remove a classe jump dps de 500milisegundos e o mario volta ao inicio

}, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPositon = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPositon < 80){

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.left = '${marioPosition}px';

        mario.src = 'img/game-over.png';
        mario.style.width = '70px'
        mario.style.top = '50%'

        clearInterval('loop');
    }
}, 10)

document.addEventListener('keydown', jump);//evento de clique = pulo