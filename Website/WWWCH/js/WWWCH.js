function getDomain()
{
    var domainExt = '.co.uk'
    var domainList = ['com'];
    var tokens = document.domain.split('.');
    while (tokens.length) {
        var token = tokens.pop();
        if (domainList.indexOf(token) != -1) {
            return '.' + token;
        }
    }
    return domainExt;
}

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
// Closes the Responsive Menu on Menu Item Click
/*$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});*/

$('#spanYearsRunning').init(function () {
    var start = new Date(2005, 1, 1).getFullYear();
    var now = new Date().getFullYear();
    var year = now - start;
    $('#spanYearsRunning').text(year);
});

$(".hamburger").on("click", function (e) {
    $(".hamburger").toggleClass("is-active");
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


$('#copyrightSection').init(function () {
    var now = new Date().getFullYear();
    var domainExt = getDomain();
    $('#copyrightSection').text("Copyright © www.westwalesweddingcarhire" + domainExt + " " + now);
});

$('#spanDomainExtension').init(function () {
    $('#spanDomainExtension').text(getDomain());
});