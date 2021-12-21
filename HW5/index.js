var light = document.getElementById('light') 

light.addEventListener('click', () => {
    document.body.classList.remove('blue', 'red', 'dark')
})


var dark = document.getElementById('dark') 

dark.addEventListener('click', () => {
    document.body.classList.add('dark')
    document.body.classList.remove('blue', 'red')
})

var blue = document.getElementById('blue') 

blue.addEventListener('click',() => {
    document.body.classList.add('blue')
    document.body.classList.remove('red', 'dark')
})

var red = document.getElementById('red')

red.addEventListener('click', () => {
    document.body.classList.add('red')
    document.body.classList.remove('dark', 'blue')
})

