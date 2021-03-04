window.onload = () =>{
    const headerRight = document.querySelector('.header-right');
    const menuToggle = document.querySelector('#menuToggle');
    const menuClose = document.querySelector('#menuClose');

    menuToggle.onclick = () =>{
        headerRight.classList.toggle('-right-full');
        headerRight.classList.toggle('right-0');
    }
    menuClose.onclick = () =>{
        headerRight.classList.toggle('-right-full');
        headerRight.classList.toggle('right-0');
    }
}