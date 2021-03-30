$(document).ready(function () {

    $('#menu').click(function () {

        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('.btn-commander').click(function () {

        $("#notification").fadeIn("slow").html('Désolé ce site est un site vitrine. Cette fonction ne fonctionne pas. Merci pour votre comprehension ');
        $("#notification").fadeOut(8000);
    });



});