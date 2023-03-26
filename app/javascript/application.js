// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import jquery from "jquery"
window.$ = jquery
import "controllers"
import "custom/category_select"
import slick from "slick-carousel"
window.slick = slick

$(function() {
    alert('jquery');
});

$(document).ready(function() {
    $('.test').slick();
});

$(document).ready(function(){
    $('.top-image').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
    });
});