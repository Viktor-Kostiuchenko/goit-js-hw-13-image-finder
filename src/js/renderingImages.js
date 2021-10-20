import refs from './refs/refs'
import imagesTpl from '../templates/galleryItem.hbs'
import { Pixabay } from './fetchingImages'
import { showCirclesLoading } from './components/loadingCircles'
import { callModalWindow } from './components/modalWindow'
import { onError, onNotice } from './components/notifications'
import { createImagesMarkup, clearImagesMarkup} from './components/markup'
import '../../node_modules/material-design-icons/iconfont/material-icons.css'


const pixabay = new Pixabay()

export function addNewImages() {
  showCirclesLoading('is-hidden', 'is-shown')
  pixabay.fetchImages().then(images => {
    if (images.length === 0) {
      return onError()
    }
    createImagesMarkup(imagesTpl, images)
    showCirclesLoading('is-shown', 'is-hidden')
  })
}

function onSubmit(evt) {
  evt.preventDefault()
  clearImagesMarkup()
  pixabay.resetPage()
  pixabay.imagesQuery = evt.target.elements.search.value
  addNewImages()
}

function onImageClick(evt) {
  const isImage = evt.target.nodeName === "IMG"
  if (!isImage) {
    return
  }
  callModalWindow(evt)
}

function onScroll() {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    addNewImages()
  }
}

window.addEventListener('scroll', onScroll)
refs.formEl.addEventListener('submit', onSubmit)
refs.galleryEl.addEventListener('click', onImageClick)

