$(document).ready(function() {
    var sticky = $('.nav').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > sticky) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });

});