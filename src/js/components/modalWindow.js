import * as basicLightbox from 'basiclightbox'
import '../../../node_modules/basiclightbox/src/styles/main.scss'

export class Modal {
  constructor() {
    this.galleryEl = document.querySelector('.gallery')
  }

  addModalWindow(evt) {
    const isImage = evt.target.nodeName === "IMG"
    if (!isImage) {
      return
    }
    basicLightbox.create(`
      <img width="1280" src="${evt.target.dataset.src}">
    `, {
      className: 'modal',
      onShow: () => {
        document.body.style.overflowY = 'hidden'
      },
      onClose: () => {
        document.body.style.overflowY = 'unset'
      }
    }).show()

  }

  callModalWindow() {
    this.galleryEl.addEventListener('click', this.addModalWindow)
  }
}