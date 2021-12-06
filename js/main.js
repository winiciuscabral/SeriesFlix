$(function() {

    $(".slide").slick({
        infinite: true,
        slidesToShow: 5, 
        slidesToScroll: 1,
        prevArrow: $(".arrow-prev"),
        nextArrow: $(".arrow-next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 760,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
                
            /*
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }   
            }
        ]
    }); */
}) 
