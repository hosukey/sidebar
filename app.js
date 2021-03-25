const toggleBtn = document.querySelector('.hamburger');
const xBtn = document.querySelector('.xbutton');
const menu = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
menu.classList.toggle('hide');
})

xBtn.addEventListener('click', function(){
    menu.classList.toggle('hide');
})