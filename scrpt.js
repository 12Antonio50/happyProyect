$(document).ready(function () {
    $("#showBirthdayCard").click(function () {
        $("#buttonContainer").hide(); // Oculta el contenedor del botón
        $("#birthdayContainer").fadeIn(1000, function() {
            // Muestra la tarjeta de cumpleaños
            reproducirSonido();
        }); 
        setInterval(function () {
            let confetti = $("<div class='confetti'></div>");
            let xPos = Math.random() * $(window).width();
            let yPos = Math.random() * $(window).height();
            confetti.css({
                left: xPos,
                top: yPos
            });
            $(".confetti-container").append(confetti);
        }, 100);
    });
});

function reproducirSonido() {
    const audio = document.getElementById("happy");
    audio.play();
}
