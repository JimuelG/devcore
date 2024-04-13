const nav = document.getElementsByClassName('nav-bar')[0];
window.addEventListener('scroll', function() {
    const verticalScrollPosition = window.scrollY;
    
    if(verticalScrollPosition >= 200 || verticalScrollPosition >= 200){
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
});