let devicesButton = document.querySelector('.devices-content__btn')
let devicesButtonText = devicesButton.querySelector('.next-button__text')
let devicesButtonIcon = devicesButton.querySelector('.next-button__icon')
let devicesContainer = document.querySelector('.devices-container')
let devicesContent = document.querySelector('.devices-content')
let mediaQuery = window.matchMedia('(min-width: 768px)')

devicesButton.addEventListener('click', function () {
  if (devicesButtonText.textContent === 'Показать все') {
    devicesButtonText.textContent = 'Скрыть'
    devicesContent.setAttribute('style', 'height: auto;')
    devicesContainer.setAttribute('style', 'height: auto;')
    devicesButtonIcon.classList.add('icon-rotate')
  } else {
    devicesButtonText.textContent = 'Показать все'
    devicesContent.removeAttribute('style')
    devicesButtonIcon.classList.remove('icon-rotate')
    devicesContainer.removeAttribute('style', 'height: auto;')
  }
})

function HandleMediaQuery(e) {
  if (!mediaQuery.matches) {
    devicesContent.removeAttribute('style')
    devicesContainer.removeAttribute('style', 'height: auto;')
  }
}

mediaQuery.addListener(HandleMediaQuery)
HandleMediaQuery(mediaQuery)
