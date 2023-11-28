const buttonColors = ["red", "blue", "green", "yellow"]
const gamePattern = []
const userClickedPattern = []
var level = 0
var started = false

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('success')
        if(gamePattern.length === userClickedPattern.length) {
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }
    }
    else {
        console.log('wrong')
        $('body').addClass('game-over')
        $('h1').text('Game Over, Press Any Key to Restart')
        setTimeout(() => {
            $('body').removeClass('game-over')
        }, 200);
        startOver()
    }
}

function startOver() {
    level = 0
    started = false
    gamePattern.splice(0, gamePattern.length)
}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass('pressed')
    setTimeout(() => {
        $(`#${currentColour}`).removeClass('pressed')
    }, 100);
}

function playSound(color) {
    const audio = new Audio(`./sounds/${color}.mp3`)
    audio.play()
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    // clear user array every time the sequence start
    userClickedPattern.splice(0, userClickedPattern.length)

    level += 1
    $('h1').text(`Level ${level}`)

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).click(() => {
        playSound(randomChosenColor)
    })

}

$('.btn').on('click', (e) => {
    var userChosenColor = $(e.currentTarget).attr('id')
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1)
})

$(document).on('keypress', (e) => {
    if(!started) {
        $('h1').text(`Level ${level}`)
        nextSequence()
        started = true
    }
})
