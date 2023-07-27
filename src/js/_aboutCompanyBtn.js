const aboutCompanyButton = document.querySelector('.aboutcompany__btn')
const aboutCompanyButtonText =
  aboutCompanyButton.querySelector('.next-button__text')
const aboutCompanyButtonIcon =
  aboutCompanyButton.querySelector('.next-button__icon')
const aboutCompanyText = document.querySelector('.aboutcompany__text')

aboutCompanyButton.addEventListener('click', function () {
  if (aboutCompanyButtonText.textContent === 'Читать далее') {
    aboutCompanyButtonText.textContent = 'Скрыть'
    aboutCompanyText.setAttribute('style', 'height: auto;')
    aboutCompanyButtonIcon.classList.add('icon-rotate')
  } else {
    aboutCompanyButtonText.textContent = 'Читать далее'
    aboutCompanyText.removeAttribute('style')
    aboutCompanyButtonIcon.classList.remove('icon-rotate')
  }
})
