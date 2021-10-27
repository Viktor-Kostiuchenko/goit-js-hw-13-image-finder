
import imagesTpl from '../templates/galleryItem.hbs'
import { Pixabay } from './components/apiService'
import { Modal } from './components/modalWindow'
import { Notifications } from './components/notifications'
import { Markup } from './components/markup'
import '../../node_modules/material-design-icons/iconfont/material-icons.css'


const pixabay = new Pixabay()
const markup = new Markup()
const notification = new Notifications()
const modal = new Modal()

function addNewImages() {
  markup.showCirclesLoading('is-hidden', 'is-shown')
  pixabay.fetchImages()
  .then(images => {
    if (images.hits.length === 0 && images.totalHits === 0) {
      notification.onNothingFound()
      markup.showCirclesLoading('is-shown', 'is-hidden')
      return 
    } else if (images.hits.length === 0 && images.totalHits !== 0) {
      notification.onNoMoreResults()
      markup.showCirclesLoading('is-shown', 'is-hidden')
      return
    } else {
      if (pixabay.page === 1) {
        notification.onAmountImages(images.totalHits)
      }
      markup.createImagesMarkup(imagesTpl, images.hits)
      markup.showCirclesLoading('is-shown', 'is-hidden')
      pixabay.updatePage()
      markup.setIntersectionObserver(addNewImages)
    }
        })
}

function onSubmit(evt) {
  evt.preventDefault()
  markup.clearImagesMarkup()
  pixabay.resetPage()
  pixabay.imagesQuery = evt.target.elements.search.value
  if (pixabay.imagesQuery.length < 2) {
    notification.onSpecificQuery()
    return 
  } else {
    addNewImages()
  }
}

document.querySelector('.search-form').addEventListener('submit', onSubmit)
markup.callScrollBtn()
modal.callModalWindow()


