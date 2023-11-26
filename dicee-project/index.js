function getElementAttr(source, attr) {
    return document.getElementsByClassName(source)[0].getAttribute(attr)
}

function setAttribute(element, source, value) {
    element.setAttribute(source, value)
}

function genRandomNum() {
    return Math.floor(Math.random() * 5) + 1
}

function checkWinner(e1, e2) {

    const p1 = getElementAttr(e1, 'value')
    const p2 = getElementAttr(e2, 'value')

    if(p1 > p2) return 'Player 1 Wins'
    else if (p2 > p1) return 'Player 2 Wins'
    return 'Draw!'
}

window.onload = function() {
    const img = document.querySelectorAll('img')
    for(var i=0; i < img.length; i++) {
        const rand = genRandomNum()
        setAttribute(img[i], 'src', './images/dice' + rand + '.png')
        setAttribute(img[i], 'value', rand)
    }
    const result = checkWinner('img1', 'img2')
    document.querySelector('h1').innerHTML = result
}



