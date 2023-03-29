let clickButton = document.querySelector('.button')

clickButton.addEventListener('click', function(){

    document.querySelector('.popup').style.display = 'flex'

})

let closeButton = document.querySelector('.button_close')

closeButton.addEventListener('click', function(){

    document.querySelector('.popup').style.display = 'none'

})