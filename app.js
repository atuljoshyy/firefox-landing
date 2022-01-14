var app = document.getElementById('text-type');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Developers')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Creators')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Designers')
    .pauseFor(2500)
    .start();