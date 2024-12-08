var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

//Comentario
typewriter.typeString('Desarrolladora Fronted Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    //numero de caracteres que se borraran
    .deleteChars(6)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();