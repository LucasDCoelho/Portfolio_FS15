function toggle(){
    let ul = document.getElementById('nav-menu');
    let btn_toggle = document.getElementById('toggle');

    if(ul.classList.contains('active')){
        ul.classList.remove('active');
        btn_toggle.innerText = 'close';
    } else{
        ul.classList.add('active');
        btn_toggle.innerText = 'menu';
    }
}