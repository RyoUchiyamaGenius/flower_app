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