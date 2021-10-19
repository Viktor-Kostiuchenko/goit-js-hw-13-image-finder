import * as basicLightbox from 'basiclightbox'

export function callModalWindow(evt) {
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