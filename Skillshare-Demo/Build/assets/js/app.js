$(document).ready(function(){
  
    // slide-down mobile menu
    // http://codepen.io/bradfrost/pen/sHvaz
    
    $('body').addClass('js');
    var $menu = $('#menu'),
    $menulink = $('.menu-link');
    
    $menulink.click(function() {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });




});