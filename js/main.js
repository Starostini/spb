$(function () {
    $('.slider__inner').slick({
        prevArrow: '<button class="slick-prev slick-btn" type="button"></button>',
        nextArrow: '<button class="slick-next slick-btn" type="button"></button>',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
    });

    // $('select').styler();
    // $('.little__menu').on('click', function () {
    //     $('.navigation ul').slideToggle();
    //     var logo = $('#logos');
    //     console.log(logo.prop('className'));

    //     if ('menu_nav'.css('display', 'none')) {
    //         $('.menu_nav').css('display', 'grid');
    //     }
    //     else {
    //         $('.menu_nav').css('display', 'none');
    //     }
    // });
});
let navigation = document.querySelector('.menu_nav');
let container = document.body;
let lis = document.querySelectorAll('.menu_nav_li');
document.querySelector('.little__menu').addEventListener('click', function (event) {
	event.stopPropagation();
    if (navigation.classList.contains('close')) {
        navigation.classList.remove('close');
        navigation.classList.add('show');
        navigation.classList.add('menuanim');
    } else if (navigation.classList.contains('show')){
        navigation.classList.add('close');
        navigation.classList.remove('show');

    } else {
        navigation.classList.remove('close');
        navigation.classList.add('show');

    }
});
container.addEventListener('click', function (event) {
    navigation.classList.remove('show');
    navigation.classList.add('close');
})

lis.forEach(element => element.addEventListener('click', function(event) {
	event.stopPropagation();
}));
    // // получаем все элементы
    // var videoEl = document.getElementsByTagName('video')[0],
    //     playBtn = document.getElementById('playBtn'),
    //     vidControls = document.getElementById('controls'),
    //     volumeControl = document.getElementById('volume'),
    //     timePicker = document.getElementById('timer');

    // // если браузер может воспроизводить видео удаляем класс
    // videoEl.addEventListener('canplaythrough', function () {
    //     vidControls.classList.remove('play_div');
    // }, false);
    // // запускаем или останавливаем воспроизведение
    // playBtn.addEventListener('click', function () {
    //     if (videoEl.paused) {
    //         videoEl.play();

    //     } else {
    //         videoEl.pause();
    //     }
    // }, false);

    // videoEl.addEventListener('play', function () {

    //     playBtn.innerHTML = '<svg class="image_button" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM10 10h4v12h-4zM18 10h4v12h-4z"></path></svg>';
    // }, false);

    // videoEl.addEventListener('pause', function () {

    //     playBtn.innerHTML = '<svg class="image_button" xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 70 70"><g><g><path d="M29.934 51.82a2.06 2.06 0 0 1-2.06-2.06V20.235a2.06 2.06 0 0 1 3.379-1.582l17.714 14.762a2.059 2.059 0 0 1 0 3.165L31.253 51.343a2.06 2.06 0 0 1-1.32.477zm2.06-27.187v20.73l12.437-10.366zm2.943 45.365a34.807 34.807 0 0 1-17.106-4.47 2.06 2.06 0 1 1 2.02-3.59c12.019 6.765 27.231 4.673 36.994-5.093 12.047-12.047 12.047-31.648 0-43.695-12.047-12.049-31.649-12.048-43.695 0-12.046 12.047-12.046 31.648 0 43.695a2.06 2.06 0 0 1-2.913 2.914c-13.653-13.654-13.653-35.869 0-49.523 13.654-13.652 35.867-13.653 49.522 0 13.653 13.654 13.653 35.869 0 49.523C53.033 66.484 44.026 70 34.937 70z" /><path d="M29.934 51.82a2.06 2.06 0 0 1-2.06-2.06V20.235a2.06 2.06 0 0 1 3.379-1.582l17.714 14.762a2.059 2.059 0 0 1 0 3.165L31.253 51.343a2.06 2.06 0 0 1-1.32.477zm2.06-27.187v20.73l12.437-10.366zm2.943 45.365a34.807 34.807 0 0 1-17.106-4.47 2.06 2.06 0 1 1 2.02-3.59c12.019 6.765 27.231 4.673 36.994-5.093 12.047-12.047 12.047-31.648 0-43.695-12.047-12.049-31.649-12.048-43.695 0-12.046 12.047-12.046 31.648 0 43.695a2.06 2.06 0 0 1-2.913 2.914c-13.653-13.654-13.653-35.869 0-49.523 13.654-13.652 35.867-13.653 49.522 0 13.653 13.654 13.653 35.869 0 49.523C53.033 66.484 44.026 70 34.937 70z" /></g></g></svg>';
    // }, false);

