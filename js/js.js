const burguer = document.querySelector('.burguer');
const nav = document.querySelector('header nav')
const menu = document.querySelectorAll(" .menu a")

function closemenu(){
    nav.classList.remove('active')
}

function toggle(event){
if(event.type === 'touchstart') event.preventDefault();
if(!nav.classList.contains('active')){
    nav.classList.add('active');
}else{
    closemenu();
}

}

burguer.addEventListener('click',toggle);
burguer.addEventListener('touchstart',toggle);


menu.forEach((menu) => menu.addEventListener('click', () => closemenu()));











const tabs = document.querySelectorAll('[data-target]'),
tabcontents = document.querySelectorAll('[data-content]');

tabs.forEach(tab=>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabcontents.forEach(tc =>{ //tc = tabcontent
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{//t = tab
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
});

var swiper = new Swiper(" .slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    fade:'true',
    grabCursor:'true',
    centerslide:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,

        },
        520: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });




