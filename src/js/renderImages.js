import refs from './refs'
import imagesTpl from '../templates/imagesList.hbs'
import {showMoreBtn, showCirclesLoading} from './buttons'

const BASE_URL = 'https://pixabay.com/api/'
const KEY = '23833327-aee66bbf86a23c3fb1d188dcb'

class Pixabay {
  constructor() {
    this.imagesQuery = '';
    this.page = 1;       
  }
  fetchImages() {
    let url = `${BASE_URL}?key=${KEY}&q=${this.imagesQuery}&image_type=photo&orientation=horizontal&per_page=3&page=${this.page}`
    this.updatePage()
    return fetch(url)
      .then(response => response.json())
      .then(obj => obj.hits)
  }
  updatePage(){
    this.page +=1
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.imagesQuery 
  }
  set query(newQuery) {
    this.imagesQuery  = newQuery
  }
}
const pixabay = new Pixabay()
function onSubmit(evt) {
  evt.preventDefault()
  showMoreBtn('is-shown', 'is-hidden')
  clearImagesQuery()
  pixabay.resetPage()
  pixabay.imagesQuery = evt.target.elements.search.value
  addNewImages()
}
function createImagesMarkup(template, data) {
  refs.listEl.insertAdjacentHTML('beforeend', template(data))
}
export function addNewImages() {
  showMoreBtn('is-hidden', 'is-shown')
  showCirclesLoading('is-shown', 'is-hidden')

  pixabay.fetchImages().then(images => {
    createImagesMarkup(imagesTpl, images)
    showMoreBtn('is-shown', 'is-hidden')
    showCirclesLoading('is-hidden', 'is-shown')
  })
}
function clearImagesQuery() {
  refs.listEl.innerHTML = ''
}

refs.formEl.addEventListener('submit', onSubmit)
refs.moreBtnEl.addEventListener('click', addNewImages)