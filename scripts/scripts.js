function toggle(){
    let nav = document.getElementById('nav');
    let ul = document.getElementById('nav-menu');
    let btn_toggle = document.getElementById('toggle');

    if(ul.classList.contains('active')){
        nav.classList.remove('active');
        ul.classList.remove('active');
        btn_toggle.innerText = 'menu';
    } else{
        nav.classList.add('active');
        ul.classList.add('active');
        btn_toggle.innerText = 'close';
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });