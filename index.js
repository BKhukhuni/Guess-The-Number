'use strict'
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='⛑ correct number!';
document.querySelector('.number').textContent= 13;
document.querySelector('.score').textContent= 10;
document.querySelector('.guess').value= 8;*/

let number =Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function(){
    const guess= Number(document.querySelector('.guess').value)
        if(!guess){
            document.querySelector('.message').textContent='no number 👻'
        }else if( guess === number){
            document.querySelector('.message').textContent='congrats! 🥳'
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent=number;
            if (score>highscore){
                document.querySelector('.highscore').textContent = score;
            }
        }
        else if(guess != number){
            if(score > 1){
                document.querySelector('.message').textContent= guess > number ? 'too high! 😔' :'too low 😔'
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent='You lose ! 💀'
                document.querySelector('.score').textContent = 0;
            }
     
        }
    
})
document.querySelector('.again').addEventListener('click', function(){
    number =Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent='20';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent='start guessing!'
    document.querySelector('.guess').value='';
    document.querySelector('.number').style.width='15rem'
})
