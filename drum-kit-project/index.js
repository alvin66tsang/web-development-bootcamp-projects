function DrumKit(key, audio) {
    this.key = key
    this.audio = audio
}

const drumW = new DrumKit('w', './sounds/crash.mp3')
const drumA = new DrumKit('a', './sounds/kick-bass.mp3')
const drumS = new DrumKit('s', './sounds/snare.mp3')
const drumD = new DrumKit('d', './sounds/tom-1.mp3')
const drumJ = new DrumKit('j', './sounds/tom-2.mp3')
const drumK = new DrumKit('k', './sounds/tom-3.mp3')
const drumL = new DrumKit('l', './sounds/tom-4.mp3')

document.addEventListener('keypress', function(event) {
    addSound(event.key, playSound, animationKey)
})

document.querySelectorAll('.drum').forEach((button) => {
    button.addEventListener('click', function() {
        addSound(this.innerHTML, playSound, animationKey)
    })
})

function addSound(key, sound, animate) {
    sound(key)
    animate(key)
}

function playSound(key) {
    var drum = new DrumKit()
    switch(key) {
        case 'w':
            drum = drumW
            break
        case 'a':
            drum = drumA
            break
        case 's':
            drum = drumS
            break
        case 'd':
            drum = drumD
            break
        case 'j':
            drum = drumJ
            break
        case 'k':
            drum = drumK
            break
        case 'l':
            drum = drumL
            break
    }
    const audio = new Audio(drum.audio)
    audio.play()
}

function animationKey(key) {      
    document.querySelector(`.${key}.drum`).classList.add('pressed')
    setTimeout(() => {
        document.querySelector(`.${key}.drum`).classList.remove('pressed')
    }, 100);
}