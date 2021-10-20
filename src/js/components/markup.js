import refs from '../refs/refs'
export function createImagesMarkup(template, data) {
  refs.galleryEl.insertAdjacentHTML('beforeend', template(data))
}

export function clearImagesMarkup() {
  refs.galleryEl.innerHTML = ''
}