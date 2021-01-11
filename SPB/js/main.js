
function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

let btn = document.querySelector('.navigation__menu'),
    menu = document.querySelector('.navigation__list'),
    social = document.querySelector('.social__list'),
    body = document.body,
    slider = document.querySelector('.staging__slider'),
    sliderInner = document.querySelectorAll('.staging__inner'),
    marginLeft = +window.getComputedStyle(slider).marginLeft.slice(0,+window.getComputedStyle(slider).marginLeft.length-2),
    marginRight = +window.getComputedStyle(slider).marginRight.slice(0,+window.getComputedStyle(slider).marginRight.length-2);
    slider.style.width = `${document.documentElement.clientWidth- (marginLeft + marginRight)}px`;
window.addEventListener('resize', function () {
    if (window.innerWidth > 991) {
        menu.style.display = 'flex';
        social.style.display = 'flex';
    } else {
        menu.style.display = 'none';
        social.style.display = 'none';
    }
    marginLeft = +window.getComputedStyle(slider).marginLeft.slice(0,+window.getComputedStyle(slider).marginLeft.length-2);
    marginRight = +window.getComputedStyle(slider).marginRight.slice(0,+window.getComputedStyle(slider).marginRight.length-2);
    slider.style.width = `${document.documentElement.clientWidth- (marginLeft + marginRight)}px`;
});

btn.addEventListener('click', function (event) {
    event.stopPropagation();
    if (menu.classList.contains('navigation__animation-right') && social.classList.contains('navigation__animation-right')) {
        menu.classList.remove('navigation__animation-right');
        social.classList.remove('navigation__animation-right');
    }
    menu.style.display = 'block';
    social.style.display = 'flex';
    menu.classList.add('navigation__animation');
    social.classList.add('navigation__animation');
});
menu.addEventListener('click', function(event) {
    event.stopPropagation();
});
social.addEventListener('click', function(event) {
    event.stopPropagation();
});
body.addEventListener('click', function(event) {
    event.stopPropagation();
    if (menu.classList.contains('navigation__animation') && social.classList.contains('navigation__animation')) {
        menu.classList.remove('navigation__animation');
        social.classList.remove('navigation__animation');
    }
    menu.classList.add('navigation__animation-right');
    social.classList.add('navigation__animation-right');
    if (window.innerWidth < 992) {
        setTimeout(function () {
            menu.style.display = 'none';
            social.style.display = 'none';
        }, 1000);
    }
});

//Sort slides for slider

let pixelStart = 0;
for(let slide of sliderInner) {
    let pixel = 442;
    slide.style.left = `${pixelStart}px`;
    pixelStart = pixelStart + pixel;
}

//Connect anchor for old ver. of browsers
let linkNavs = document.querySelectorAll('.nav-btn'),
    V = 0.15;
for (let linkNav of linkNavs) {
    linkNav.addEventListener('click', function(e) {
        e.preventDefault();
        let w = window.pageYOffset,
            hash = linkNav.getAttribute('href').substr(1),
            t = document.getElementById(hash).getBoundingClientRect().top,
            start = null;

        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}

//TODO slider
let x = 100;
while (x>0) {
    console.log(x);
    x--;
    if(x===0) {
        console.log('end');
    }
}

let sliderMask = document.querySelectorAll('.staging__inner');

for (let slides of sliderMask) {
    slides.addEventListener('mouseover', function(event) {
        console.dir(slides);
        let slideLength = slides.style.left.length-2;
        let leftBorder = +slides.style.left.slice(0,slideLength);
        console.log(leftBorder);
    })
}

function isSliderInRightPlace(event, slides) {

}