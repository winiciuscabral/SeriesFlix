$(function() {

    $(".slide").slick({
        infinite: true,
        slidesToShow: 5, 
        slidesToScroll: 1,
        prevArrow: $(".arrow-prev"),
        nextArrow: $(".arrow-next"),
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }   
            }
        ]
    });
})

// prevArrow: $(".arrow-prev"), 
        //nextArrow: $(".arrow-next"),

