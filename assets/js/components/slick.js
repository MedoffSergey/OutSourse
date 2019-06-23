var portfolio = $("#portfolio");

portfolio.slick({
    arrows: false,
    dots: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
});

$("#portfolio-arrow-prev").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickPrev');
});

$("#portfolio-arrow-next").on("click", function(event) {
    event.preventDefault();

    portfolio.slick('slickNext');
});

