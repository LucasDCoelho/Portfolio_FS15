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

function animationScroll(){
  document.addEventListener('scroll', (event) => {
    let altura = window.pageYOffset;
    if(altura > 50){
      document.getElementsByTagName("div")[1].classList.add("down");
    }else{
      document.getElementsByTagName("div")[1].classList.remove("down");
    }
  });
}

animationScroll();
