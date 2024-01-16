
// Código jQuery para desplazamiento suave
$(document).ready(function () {
    $('#link1').click(function () {
        $('html, body').animate({
            scrollTop: $('#caracteristicas').offset().top
        }, 1000);
    });

    $('#link2').click(function () {
        $('html, body').animate({
            scrollTop: $('#trabajos').offset().top
        }, 1000);
    });

    $('#link3').click(function () {
        $('html, body').animate({
            scrollTop: $('#presupuesto').offset().top
        }, 1000);
    });

    $('#link4').click(function () {
        $('html, body').animate({
            scrollTop: $('#footer').offset().top
        }, 1000);
    });
});
