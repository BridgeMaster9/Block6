const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const sidebarMask = document.querySelector('.Mask-sidebar')
const callback = document.querySelector('.callback')
const feedback = document.querySelector('.feedback')
const contentWrapper = document.querySelector('.content-wrapper')
let count = 1 //состояние кнопки burger нечет-open чет-close

burger.addEventListener('click', function () {
  count++
  if (!(count % 2)) {
    sidebar.classList.add('sidebar--open')
    sidebarMask.classList.add('Mask-sidebar--open')
    contentWrapper.classList.add('without-scroll')
    burger.classList.add('header__close-btn')
    burger.classList.remove('header__burger-btn')
  } else {
    sidebar.classList.remove('sidebar--open')
    sidebarMask.classList.remove('Mask-sidebar--open')
    contentWrapper.classList.remove('without-scroll')
    burger.classList.remove('header__close-btn')
    burger.classList.add('header__burger-btn')
  }
})

sidebarMask.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--open')
  sidebarMask.classList.remove('Mask-sidebar--open')
  callback.classList.remove('callback--open')
  feedback.classList.remove('feedback--open')
  contentWrapper.classList.remove('without-scroll')
  burger.classList.remove('header__close-btn')
  burger.classList.add('header__burger-btn')
})
