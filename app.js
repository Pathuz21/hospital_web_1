

$(document).ready(function(){
    $('.home-image').slick({
        dots: true,
        infinite: false, // Change to false if you don't want continuous scrolling
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust scroll speed
        arrows: false
    });
});