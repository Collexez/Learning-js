let rr = document.querySelector('.rr');
let rr1 = document.querySelector('.rr1')
let myInput = document.querySelector('.tt');
let Btn = document.querySelector('.tt1');
let gg2 = document.querySelector('.gg2')
let message = document.querySelector('.rag')

let goat = Math.floor(Math.random()*10)
console.log(goat)
let trial = 5
gg2.innerHTML = trial

function spp() {
    gg2.innerHTML = trial
    if ( Btn.textContent =='reset'){
        Btn.textContent='check'
        myInput.value=''

    }
    else if(trial <1){
        message.innerHTML='GAME OVER 😭'
        Btn.textContent='reset'
        trial = 5
        goat = Math.floor(Math.random()*10)
        console.log(goat)
        message.innerHTML==''
    } 
    else if (myInput.value == goat) {
        message.innerHTML='you won 😊'
        Btn.textContent='reset'
        trial= 5
        goat = Math.floor(Math.random()*10)
        console.log(goat)
    }  
    else if (myInput.value < goat){
        message.innerHTML='try higher value'
        trial--
    }
    else if (myInput.value >goat){
        message.innerHTML= 'try lower value'
        trial --
    }
    
    
    

    
}