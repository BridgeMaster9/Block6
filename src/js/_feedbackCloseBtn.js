const burger = document.querySelector('.burger')
const header = document.querySelector('.header')
const headerChatBtn = header.querySelector('.header__chat-btn')
const sidebar = document.querySelector('.sidebar')
const sidebarChatBtn = sidebar.querySelector('.header__chat-btn')
const feedback = document.querySelector('.feedback')
const feedBtnClose = document.querySelector('.feedback__close-btn')
const sidebarMask = document.querySelector('.Mask-sidebar')
const contentWrapper = document.querySelector('.content-wrapper')
const feedbackFormInput = document.querySelector('.feedback-form__input')
const arrFeedBtn = [headerChatBtn, sidebarChatBtn]

for (let i = 0; i < 2; i++) {
  arrFeedBtn[i].addEventListener('click', function () {
    feedback.classList.add('feedback--open')
    sidebarMask.classList.add('Mask-sidebar--open')
    sidebar.classList.remove('sidebar--open')
    contentWrapper.classList.add('without-scroll')
    feedbackFormInput.focus()
    burger.classList.remove('header__close-btn')
    burger.classList.add('header__burger-btn')
  })
}
feedBtnClose.addEventListener('click', function () {
  feedback.classList.remove('feedback--open')
  sidebarMask.classList.remove('Mask-sidebar--open')
  contentWrapper.classList.remove('without-scroll')
})
