// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import jquery from "jquery"
window.$ = jquery
import slick from "slick-carousel"
window.slick = slick
import "controllers"
import "custom/category_select"
import "custom/slide_show"


document.addEventListener('turbo:load', function() {
    alert('jquery');
});