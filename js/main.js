//preload icon loader
$(window).load(function() {
  $(".se-pre-con").fadeOut("slow");;
});

//ONE PAGE NAVIGATION FOR DESKTOP
$('#fixed-menu').onePageNav({

    scrollThreshold: 0.5,
    scrollSpeed: 930,
    'scrollOffset': -7,
    currentClass: 'active',
    changeHash: false,
    filter: ':not(.external)',
    easing: "swing"
});

//ONE PAGE NAVIGATION FOR MOBILE
$('#navformobile').onePageNav({
    scrollThreshold: 0.5,
    scrollSpeed: 750,
    'scrollOffset': -7,
    currentClass: 'active',
    changeHash: false,
    filter: ':not(.external)',
    easing: "swing"
});
// FIXED NAVIGATION TO TOP
var mn = $(".fixed-nav");
$(window).scroll(function () {
    if ($(this).scrollTop() > 999) {
        mn.addClass("main-nav-scrolled");
    }
    else {
        mn.removeClass("main-nav-scrolled");
    }
});
// NAVIGATION FROM ARROW TO PAGE WHOAMI
$('#page-whoamilink').on('click', function (event) {
    event.preventDefault(); // To prevent following the link (optional)
    scrollPoint = $("#page-whoami").offset().top - 0;
    $('body,html').animate({
        scrollTop: scrollPoint
    }, 750);
});
// FADE IN ELEMENT CV
$(document).ready(function () {
    // hide our element on page load
    $('#element-to-animate');
    $('#element-to-animate').waypoint(function () {
        $('#element-to-animate').addClass('fadeInLeft');
    }, {offset: '170%'});
});
// FADE IN ELEMENT PAGE WHO AMI
$(document).ready(function () {

    // hide our element on page load
    $('#profiel').css('opacity', 0);

    $('#profiel').waypoint(function () {
        $('#profiel').addClass('fadeInLeft');
    }, {offset: '75%'});

});
// FADE IN ELEMENT PAGE WHO AMI
$(document).ready(function () {

    // hide our element on page load
    $('#article1').css('opacity', 0);

    $('#article1').waypoint(function () {
        $('#article1').addClass('fadeInRight');
    }, {offset: '70%'});

});
// FADE IN ELEMENT PAGE INTERESTS
$(document).ready(function () {

    // hide our element on page load
    $('#hobbies1').css('opacity', 0);

    $('#hobbies1').waypoint(function () {
        $('#hobbies1').addClass('fadeInRight');
    }, {offset: '70%'});

});

// FADE IN ELEMENT PAGE ITALENT
$(document).ready(function () {

    // hide our element on page load
    $('#italentanimated');

    $('#italentanimated').waypoint(function () {
        $('#italentanimated').addClass('fadeInRight');
    }, {offset: '160%'});

});
// FLEXSLIDER
$(window).load(function () {

    $('#flexslider1').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: false,
        pauseOnHover: true,
        slideshowSpeed: 50000,
        animationDuration: 900
    });
});
