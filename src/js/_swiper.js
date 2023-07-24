let swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  sladeClass: 'brands-content__item',
  init: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>'
    }
  }
})

//------ при width screen>768 - remove swiper
let mediaQuery = window.matchMedia('(min-width: 768px)')

function HandleMediaQuery(e) {
  if (mediaQuery.matches) {
    swiper.forEach((element) => {
      element.disable()
    })
  } else {
    swiper.forEach((element) => {
      element.enable()
    })
  }
}

mediaQuery.addListener(HandleMediaQuery)
HandleMediaQuery(mediaQuery)
