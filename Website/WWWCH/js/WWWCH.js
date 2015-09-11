
// WOW
new WOW().init();

// Page scroll

$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 55
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// Video
$(function () {

    var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
    $fluidEl = $("figure");

    $allVideos.each(function () {

        $(this)
          // jQuery .data does not work on object/embed elements
          .attr('data-aspectRatio', this.height / this.width)
          .removeAttr('height')
          .removeAttr('width');

    });

    $(window).resize(function () {

        var newWidth = $fluidEl.width();
        $allVideos.each(function () {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.attr('data-aspectRatio'));

        });

    }).resize();

});

