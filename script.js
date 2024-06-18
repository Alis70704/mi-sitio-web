/*  

    Archivo de JS que contiene un script (conjunto de lineas de código que normalmente buscan realizar alguna acción en específico).

*/

const edad = 25;

alert('Hola Mundo')


alert(edad)

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});


var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
typewriter
    .typeString('Alisson Gonzalez')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Ingeniera y desarrolladora en proceso')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(1500)
    .deleteAll('viva el roller skating')
    .typeString
    .pauseFor(1500)
    .start();