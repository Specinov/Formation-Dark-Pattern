// ANTI-PATTERN 25: Utilisation de jQuery pour des tâches simples réalisables en vanilla JS
$(document).ready(function() {
    // Activate Carousel (déjà géré par Bootstrap via data-ride="carousel")
    $("#carouselExample").carousel();

    // Enable Carousel Indicators (déjà géré par Bootstrap)
    $(".carousel-indicators li").click(function() {
        $("#carouselExample").carousel($(this).index());
    });

    // Enable Carousel Controls (déjà géré par Bootstrap)
    $(".carousel-control-prev").click(function() {
        $("#carouselExample").carousel("prev");
    });
    $(".carousel-control-next").click(function() {
        $("#carouselExample").carousel("next");
    });
    
    // ANTI-PATTERN 26: Code JavaScript redondant et inutile
    console.log("Page chargée");
    console.log("Carousel initialisé");
    console.log("Scripts chargés avec succès");
});