let header = document.querySelector('.header')
let headerChatBtn = header.querySelector('.header__chat-btn')
let sidebar = document.querySelector('.sidebar')
let sidebarChatBtn = sidebar.querySelector('.header__chat-btn')
let feedback = document.querySelector('.feedback')
let feedBtnClose = document.querySelector('.feedback__close-btn')
let sidebarMask = document.querySelector('.Mask-sidebar')
let arrFeedBtn = [headerChatBtn, sidebarChatBtn]

for (let i = 0; i < 2; i++) {
  arrFeedBtn[i].addEventListener('click', function () {
    feedback.classList.add('feedback--open')
    sidebarMask.classList.add('Mask-sidebar--open')
    sidebar.classList.remove('sidebar--open')
  })
}
feedBtnClose.addEventListener('click', function () {
  feedback.classList.remove('feedback--open')
  sidebarMask.classList.remove('Mask-sidebar--open')
})
