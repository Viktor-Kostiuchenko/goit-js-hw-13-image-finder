import { addNewImages } from './renderImages'

function onScroll() {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    addNewImages()
  }
}

window.addEventListener('scroll', onScroll)