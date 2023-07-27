const brandsButton = document.querySelector('.brands-content__btn')
const brandsButtonText = brandsButton.querySelector('.next-button__text')
const brandsButtonIcon = brandsButton.querySelector('.next-button__icon')
const brandContainer = document.querySelector('.brands-container')
const brandsContent = document.querySelector('.brands-content')
const mediaQuery = window.matchMedia('(min-width: 768px)')

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
