const key = document.getElementById('key');
const display = document.querySelector('#display');

document.addEventListener('keypress',(e)=>{
    
    playSound()
    key.innerText = `You have pressed ${e.code}`
    display.innerText = `${e.charCode}`
})

function playSound(){
    let sound = new Audio("buttonPress.mp3")
    sound.play()
}