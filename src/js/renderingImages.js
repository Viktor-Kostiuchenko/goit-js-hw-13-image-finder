import refs from './refs/refs'
import imagesTpl from '../templates/galleryItem.hbs'
import { Pixabay } from './fetchingImages'
import { showCirclesLoading } from './components/loadingCircles'
import { callModalWindow } from './components/modalWindow'
import { setIntersectionObserver } from "./components/intersectionObserver"
import { onNothingFoundNotice, onSpecificQueryNotice, onNoMoreResultsNotice, onAmountImagesNotice } from './components/notifications'
import { createImagesMarkup, clearImagesMarkup} from './components/markup'
import '../../node_modules/material-design-icons/iconfont/material-icons.css'


const pixabay = new Pixabay()

export function addNewImages() {
  showCirclesLoading('is-hidden', 'is-shown')
  
  pixabay.fetchImages()
  .then(images => {
    if (images.hits.length === 0 && images.totalHits === 0) {
      onNothingFoundNotice()
      showCirclesLoading('is-shown', 'is-hidden')
      return 
    } else if (images.hits.length === 0 && images.totalHits !== 0) {
      onNoMoreResultsNotice()
      showCirclesLoading('is-shown', 'is-hidden')
      return
    } else {
      checkFirstPage(images)
      createImagesMarkup(imagesTpl, images.hits)
      showCirclesLoading('is-shown', 'is-hidden')
      pixabay.updatePage()
      setIntersectionObserver()
    }
        })
}

function checkFirstPage(images) {
  if (pixabay.page === 1) {
    onAmountImagesNotice(images.totalHits)
  }
}

function onSubmit(evt) {
  evt.preventDefault()
  clearImagesMarkup()
  pixabay.resetPage()
  pixabay.imagesQuery = evt.target.elements.search.value
  if (pixabay.imagesQuery.length < 2) {
    onSpecificQueryNotice()
    return 
  } else {
    addNewImages()
  }
}

function onImageClick(evt) {
  const isImage = evt.target.nodeName === "IMG"
  if (!isImage) {
    return
  }
  callModalWindow(evt)
}

refs.formEl.addEventListener('submit', onSubmit)
refs.galleryEl.addEventListener('click', onImageClick)
