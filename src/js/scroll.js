import { addNewImages } from './renderingImages'

function onScroll() {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    addNewImages()
  }
}

window.addEventListener('scroll', onScroll)