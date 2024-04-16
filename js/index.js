const buttonToggle = document.getElementById('button__toggle');
const menuMobile = document.getElementById("menu__mobile");

buttonToggle.addEventListener('click',()=>{
   menuMobile.classList.toggle('active')
})