const boxesElement = document.getElementById('boxes');
const btnElement = document.getElementById('btn');

btnElement.addEventListener('click',()=>{
    boxesElement.classList.toggle('big');
})

function creatDivBox(){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <4; j++) {
            const boxElement = document.createElement('div');
            boxElement.classList.add('box');
            boxElement.style.backgroundPosition = `${-j*100}px ${-i*100}px `;
            boxesElement.appendChild(boxElement) ;
        }
    }
}

creatDivBox();

