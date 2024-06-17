const mario = document.querySelector(".marioCorrendo");
const tubo = document.querySelector(".canoMario");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const tuboPosition = tubo.offsetLeft;
  const marioposition = +window.getComputedStyle(mario).bottom.replace('px', ``);
  console.log(marioposition);

  if (tuboPosition <= 120 && tuboPosition> 0 && marioposition <80) {
    tubo.style.animation = "none";
    tubo.style.left = `${tuboPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioposition}px`;

    mario.src = './imagens/Gameover.png';
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'


    clearInterval(loop);

  }
}, 10);

document.addEventListener("keydown", jump);
