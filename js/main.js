
$('.staging__slider').slick({
    autoplay: true,
    arrows: false,
    centerPadding: '0px',
    slidesToShow: 3,
    swipe: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1465,
            settings: {
                arrows: false,
                centerPadding: '0px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1020,
            settings: {
                arrows: false,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});
// $('.header__right').slick({
//     centerMode: true,
//     arrows: false,
//     centerPadding: '60px',
//     slidesToShow: 1,
//     swipe: true,
//     infinite: true,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]

// });