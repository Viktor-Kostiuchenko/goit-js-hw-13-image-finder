import { addNewImages } from './renderImages'
import { showMoreBtn } from './buttons'

function onScroll() {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    addNewImages()
  }
  if (window.scrollY > 1) {
    showMoreBtn('is-hidden', 'is-shown')
  }
}

window.addEventListener('scroll', onScroll)