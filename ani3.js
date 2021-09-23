let box=document.getElementsByClassName('box')[0]
let container=document.getElementsByClassName('container')[0]
let audio=document.querySelector('audio')
audio.load()
box.addEventListener('mouseenter',()=>{
    audio.play()
    container.classList.add('security_breach')
    setTimeout(() => {
        audio.pause()
        container.classList.remove('security_breach')
    }, 10000);
})