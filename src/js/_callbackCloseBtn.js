let header = document.querySelector('.header')
let headerCallBtn = header.querySelector('.header__call-btn')
let sidebar = document.querySelector('.sidebar')
let sidebarCallBtn = sidebar.querySelector('.header__call-btn')
const burger = document.querySelector('.burger')

let callback = document.querySelector('.callback')
const callBtnClose = document.querySelector('.callback__close-btn')
const sidebarMask = document.querySelector('.Mask-sidebar')
const contentWrapper = document.querySelector('.content-wrapper')
const callFormInput = document.querySelector('.callback-form__input')
const arrCallBtn = [headerCallBtn, sidebarCallBtn]

for (let i = 0; i < 2; i++) {
  arrCallBtn[i].addEventListener('click', function () {
    callback.classList.add('callback--open')
    sidebarMask.classList.add('Mask-sidebar--open')
    sidebar.classList.remove('sidebar--open')
    contentWrapper.classList.add('without-scroll')
    callFormInput.focus()
    burger.classList.remove('header__close-btn')
    burger.classList.add('header__burger-btn')
  })
}
callBtnClose.addEventListener('click', function () {
  callback.classList.remove('callback--open')
  sidebarMask.classList.remove('Mask-sidebar--open')
  contentWrapper.classList.remove('without-scroll')
})
