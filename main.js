let block = document.getElementById('block');
let hole = document.getElementById('hole');
let character = document.getElementById('character')
let score = document.getElementById('score')
let jumping = 0;
let counter = 0;

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+250);
    hole.style.top = random + 'px';
    counter++;
    score.innerHTML = counter;
})

setInterval(function () {
    let characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if(jumping == 0){
    character.style.top = (characterTop+3)+'px';
    }
    let blockL = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let holeT = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    let cTop = -(500 - characterTop);
    if((characterTop > 480)||((blockL < 70)&&(blockL > -50)&&((cTop < holeT)||(cTop > holeT + 193)))) {
        alert("Game Over");
        character.style.top = 100 + 'px';
        counter = 0
    }
},10);

function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        if(characterTop > 6) {
            character.style.top = (characterTop+-5)+'px';
        }
        if(jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    })
}