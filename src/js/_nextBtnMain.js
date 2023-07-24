let aboutCompanyNextBtn = document.querySelector('.aboutcompany__btn')
let aboutCompanyText = document.querySelector('.aboutcompany__text')

aboutCompanyNextBtn.addEventListener('click', function () {
  aboutCompanyNextBtn.classList.add('aboutcompany__btn--open')
  aboutCompanyText.classList.add('text--open')
})
