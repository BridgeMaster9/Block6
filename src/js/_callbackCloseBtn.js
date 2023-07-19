let header = document.querySelector('.header')
let headerCallBtn = header.querySelector('.header__call-btn')
let sidebar = document.querySelector('.sidebar')
let sidebarCallBtn = sidebar.querySelector('.header__call-btn')

let callback = document.querySelector('.callback')
let callBtnClose = document.querySelector('.callback__close-btn')
let sidebarMask = document.querySelector('.Mask-sidebar')
let arrCallBtn = [headerCallBtn, sidebarCallBtn]

for (let i = 0; i < 2; i++) {
  arrCallBtn[i].addEventListener('click', function () {
    callback.classList.add('callback--open')
    sidebarMask.classList.add('Mask-sidebar--open')
    sidebar.classList.remove('sidebar--open')
  })
}
callBtnClose.addEventListener('click', function () {
  callback.classList.remove('callback--open')
  sidebarMask.classList.remove('Mask-sidebar--open')
})
