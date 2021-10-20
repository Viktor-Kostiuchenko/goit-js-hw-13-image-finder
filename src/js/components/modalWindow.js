import * as basicLightbox from 'basiclightbox'
import '../../../node_modules/basiclightbox/src/styles/main.scss'
import '../../sass/styles.scss'

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

