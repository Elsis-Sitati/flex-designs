$(document).foundation();
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$("#imageholder").vegas({
    cover: true,
    slides: [
        {
            src: "img/year.jpg"
        },
        {
            src: "img/image.jpg"
        },
        {
            src: "img/image1.jpg"
        },
        {
            src: "img/image2.jpg"
        },
        {
            src: "img/image4.jpg"
        }
    ]
});
