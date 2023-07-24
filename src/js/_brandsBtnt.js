let brandsButton = document.querySelector('.brands-content__btn')
let brandsButtonText = brandsButton.querySelector('.next-button__text')
let brandsButtonIcon = brandsButton.querySelector('.next-button__icon')
let brandContainer = document.querySelector('.brands-container')
let brandsContent = document.querySelector('.brands-content')
let mediaQuery = window.matchMedia('(min-width: 768px)')

brandsButton.addEventListener('click', function () {
  if (brandsButtonText.textContent === 'Показать все') {
    brandsButtonText.textContent = 'Скрыть'
    brandsContent.setAttribute('style', 'height: auto;')
    brandContainer.setAttribute('style', 'height: auto;')
    brandsButtonIcon.classList.add('icon-rotate')
  } else {
    brandsButtonText.textContent = 'Показать все'
    brandsContent.removeAttribute('style')
    brandContainer.removeAttribute('style')
    brandsButtonIcon.classList.remove('icon-rotate')
  }
})

function HandleMediaQuery(e) {
  if (!mediaQuery.matches) {
    brandsContent.removeAttribute('style')
    brandContainer.removeAttribute('style')
  }
}

mediaQuery.addListener(HandleMediaQuery)
HandleMediaQuery(mediaQuery)
