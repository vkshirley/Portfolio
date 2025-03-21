//typed strings
var type = new Typed('#typed', {
    strings: ["I am a Frontend Angular Developer", "I love to create"],
    stringsElement: null,
    typeSpeed: 25,
    startDelay: 1000,
    backSpeed: 25,
    backDelay: 1000,
    contentType: 'text',
    onComplete: function () {
        $("#typed").css({ "background-color": "#C8412B" });
    },
    preStringTyped: function () { },
    onStringTyped: function () { }
});