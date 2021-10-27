import { error, info, notice, success } from '@pnotify/core'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

export class Notifications {
  constructor() {
    this.sticker = false,
    this.width = 250
  }

  onNothingFound() {
    error({
      title: 'Oops 😟',
      text: 'Nothing is found',
      sticker: this.sticker,
      width: this.width,
    });
  }

  onSpecificQuery() {
    notice({
      title: false,
      text: 'Please enter a more specific query',
      sticker: this.sticker,
      width: this.width,
    });
  }

  onNoMoreResults() {
    info({
      title: false,
      text: "We're sorry, but you've reached the end of search results",
      sticker: this.sticker,
      width: this.width
    })
  }
  
  onAmountImages(amount) {
    success({
      title: false,
      text: `Hooray! We found ${amount} images.`,
      sticker: this.sticker
    })
  }
}
