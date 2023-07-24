let burger = document.querySelector('.header__burger-btn')
let burgerClose = document.querySelector('.header__close-btn')
let sidebar = document.querySelector('.sidebar')
let sidebarMask = document.querySelector('.Mask-sidebar')
let callback = document.querySelector('.callback')
let feedback = document.querySelector('.feedback')

burger.addEventListener('click', function () {
  sidebar.classList.add('sidebar--open')
  sidebarMask.classList.add('Mask-sidebar--open')
})

burgerClose.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--open')
  sidebarMask.classList.remove('Mask-sidebar--open')
})
sidebarMask.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--open')
  sidebarMask.classList.remove('Mask-sidebar--open')
  callback.classList.remove('callback--open')
  feedback.classList.remove('feedback--open')
})
