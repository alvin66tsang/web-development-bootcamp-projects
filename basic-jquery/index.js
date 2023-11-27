$('h1').addClass('big-title margin-50') //add multiple classes in css

console.log($('h1').hasClass('margin-50')) // check class exist?

$('h1').text('Bye') // change text

$('button').html('<em>Hey</em>') //assigning html to the innerHTML

$('img').attr('src') // get attribute from element

$('a').attr('href', 'https://yahoo.com') // set attribute

$('h1').click(() => {
    $('h1').css('color', '#0f0')
})

$('button').click(() => {
    $('h1').css('color', '#0ff')
})

$(document).keypress((event) => { // add event to the document
    $('h1').text(event.key)
})

$(document).on('mouseover', () => {
    $('h1').css('color', '#b3b')
})

$('h1').before('<button>New</button>')
$('h1').prepend('<em>Coco</em>')

// $('h1').hide() // hide element

$('button').on('click', () => {
    // $('h1').fadeToggle()
    // $('input').slideToggle()

    $('h1').animate({
        opacity: 0.5,
        margin: '20%'
    }) // set custom animate properties (must be numeric value)
})