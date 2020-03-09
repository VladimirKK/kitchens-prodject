$(document).ready(function() {
   $('.navbar__menu-button').click(function() {
       $('.menu').toggleClass('menu_active');

});
     $(window).scroll(function() {
        $('.menu').removeClass('menu_active');
     });
});