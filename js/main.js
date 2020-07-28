
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
            breakpoint: 992,
            settings: {
                arrows: false,
                centerPadding: '0px',
                slidesToShow: 1
            }
        },

    ]
});

let btn = document.querySelector('.navigation__menu');
btn.addEventListener('click', document.querySelector('.navigation__list').classList.add = "navigation__animation");
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