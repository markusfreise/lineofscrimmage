const { default: axios } = require("axios");
import { createApp } from 'vue';
import Swiper, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

window.addEventListener('load',function() {

    var heroSlide = 1;
    
    new Swiper('.wp-block-ff .swiper-container',{
        modules: [Autoplay, Pagination],
        lazy: true,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 1000,
        },
    });

    this.window.setInterval(function(){
        document.querySelectorAll('.wp-block-sal-hero .slide')[heroSlide].classList.add('active');
        if(heroSlide==0) {
            document.querySelectorAll('.wp-block-sal-hero .slide')[document.querySelectorAll('.wp-block-sal-hero .slide').length-1].classList.remove('active');
        }
        document.querySelectorAll('.wp-block-sal-hero .slide').forEach(
            (slide,index) => {
                if(index > 0 && index < heroSlide) {
                    slide.classList.remove('active');
                }
            }
        )
        heroSlide++;
        if(heroSlide == document.querySelectorAll('.wp-block-sal-hero .slide').length) {
            heroSlide = 0;
        }
    }, 4000);

})