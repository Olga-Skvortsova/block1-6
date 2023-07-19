import './index.html';
import './index.sass';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { menu, burger, shadow, navigation, burgerLines, head, swiperReadMore, swiperContainer, swiperWrapper, menuWrapper, lineInNav, callButton, callBlock, callCross, bellButton, bellBlock, bellCross, servicesReadMore, services, servicesTextBlock,  servicesText, servicesSpan, servicesHidden, readMoreButon, servicesSpan2, servicesContainer, swiperContainer2, swiperWrapper2, swiperReadMore2, swiperRepair } from './modules/calc';

burger.addEventListener('click', changeColor);
menuWrapper.addEventListener('click', changeColor);
swiperReadMore.addEventListener('click', readMoreAvailable);
callButton.addEventListener('click', callModuleActive);
callCross.addEventListener('click', callModuleActive);
bellButton.addEventListener('click', bellModuleActive);
bellCross.addEventListener('click', bellModuleActive);
servicesReadMore.addEventListener('click', readMoreService);
swiperReadMore2.addEventListener('click', readMoreAvailable2);

function readMoreService() {
    readMoreButon.classList.toggle('displaynone');
    servicesHidden.classList.toggle('flexdisplay');
    servicesReadMore.firstElementChild.classList.toggle('imgtransform');
    if(document.documentElement.clientWidth < 750) {
        services.classList.toggle('serices-read-more-block');
        servicesTextBlock.classList.toggle('serices-read-more-text');
        servicesText.classList.toggle('serices-text');
        servicesSpan.classList.toggle('flexdisplay');
    } else if(document.documentElement.clientWidth > 750 && document.documentElement.clientWidth < 1090) {
        servicesSpan2.classList.toggle('flexdisplay');
        servicesContainer.classList.toggle('section1-background2');
        servicesReadMore.classList.toggle('serices-read-more2');
    }
}

menuWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('menu-wrapper')) {
        event.stopPropagation();
        return;
    }
    changeColor();
});

function changeColor() {
    menuWrapper.classList.toggle('menu-wrapper-active');
    menu.classList.toggle('menu_active');
    burgerLines[0].classList.toggle('head__burger-line-change-1');
    burgerLines[1].classList.toggle('head__burger-line-change-2');
    burgerLines[2].classList.toggle('head__burger-line-change-3');
    navigation.classList.toggle('hidden');
    shadow.classList.toggle('hidden');
    head.classList.toggle('absolute-burger');
    lineInNav.classList.toggle('displaynone');
}

function callModuleActive(){
    callBlock.classList.toggle('call-active');
    head.classList.toggle('displaynone');
}

function bellModuleActive(){
    bellBlock.classList.toggle('bell-active');
    head.classList.toggle('displaynone');
}

function initServiceSwiper() {
    const serviceSwiper = new Swiper('.services__swiper-container', {
        spaceBetween: 19.5,
        freeMode: true,
        slidesPerView: 1.6,
    });
}

function initSlider() {
    const swiper= new Swiper('.swiper-container', {
        modules: [Pagination],
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1.25,
        spaceBetween: 16,
        centeredSlides: true,
    });
    const priceSwiper = new Swiper('.swiperprice__container', {
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}


function detectDevice() {
    if(document.documentElement.clientWidth < 750){
        initSlider();
    };
}
detectDevice();  

function detectDevice2() {
    if(document.documentElement.clientWidth < 1103) {
        initServiceSwiper();
    }
}
detectDevice2();

function readMoreAvailable () {
    if(document.documentElement.clientWidth > 750 && document.documentElement.clientWidth < 1090){
        swiperContainer.classList.toggle('swiper-сontainer-height-more');
        swiperWrapper.children[6].classList.toggle('flexdisplay');
        swiperWrapper.children[7].classList.toggle('flexdisplay');
        swiperWrapper.classList.toggle('swiper-wrapper-height-more');
        swiperReadMore.firstElementChild.classList.toggle('imgtransform');
        swiperReadMore.lastElementChild.classList.toggle('displaynone');
        swiperReadMore.children[1].classList.toggle('flexdisplay');
    }else if(document.documentElement.clientWidth > 1100){
        swiperContainer.classList.toggle('swiper-сontainer-height-more');
        swiperWrapper.children[8].classList.toggle('flexdisplay');
        swiperWrapper.children[9].classList.toggle('flexdisplay');
        swiperWrapper.children[10].classList.toggle('flexdisplay');
        swiperWrapper.classList.toggle('swiper-wrapper-height-more');
        swiperReadMore.firstElementChild.classList.toggle('imgtransform');
        swiperReadMore.lastElementChild.classList.toggle('displaynone');
        swiperReadMore.children[1].classList.toggle('flexdisplay');
    };
};

function readMoreAvailable2 () {
    swiperReadMore2.firstElementChild.classList.toggle('imgtransform');
    swiperReadMore2.lastElementChild.classList.toggle('displaynone');
    swiperReadMore2.children[1].classList.toggle('flexdisplay');
    if(document.documentElement.clientWidth > 750 && document.documentElement.clientWidth < 1090){
        swiperContainer2.classList.toggle('repair-сontainer-height-more')
        swiperWrapper2.classList.toggle('repair-wrapper-height-more');
        swiperRepair.classList.toggle('repair-сontainer-height-more');
        swiperWrapper2.children[3].classList.toggle('margintop22');
        swiperWrapper2.children[4].classList.toggle('margintop22');
        swiperWrapper2.children[5].classList.toggle('margintop22');
    }else if(document.documentElement.clientWidth > 1100){
        swiperContainer2.classList.toggle('repair-сontainer-height-more')
        swiperWrapper2.classList.toggle('repair-wrapper-height-more');
        swiperRepair.classList.toggle('repair-сontainer-height-more');
        swiperWrapper2.children[4].classList.toggle('margintop22');
        swiperWrapper2.children[5].classList.toggle('margintop22');
        swiperWrapper2.children[6].classList.toggle('margintop22');
        swiperWrapper2.children[7].classList.toggle('margintop22');
    };
};