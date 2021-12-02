$(function() {

    $(".slide").slick({
        infinite: true,
        slidesToShow: 5, 
        slidesToScroll: 1,
        leftMode: true,
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

    $(".slide-single").hover(function(){
        $(this).css("z-index", "1000");
    })

    $(".slide-single").mouseout(function(){
        $(this).css("z-index", "0");
    })

})

