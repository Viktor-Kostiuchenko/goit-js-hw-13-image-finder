import { error, info, notice, success } from '@pnotify/core'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

export function onNothingFoundNotice() {
  error({
    title: 'Oops 😟',
    text: 'Nothing is found',
    sticker: false,
    width: 250,
    delay: 3000
});
}

export function onSpecificQueryNotice() {
  notice({
    title: false,
    text: 'Please enter a more specific query',
    sticker: false,
    width: 250,
    delay: 3000
});
}

export function onNoMoreResultsNotice() {
  info({
    title: false,
    sticker: false,
    width: 250,
    text: "We're sorry, but you've reached the end of search results"
  })
}

export function onAmountImagesNotice(amount) {
  success({
    title: false,
    sticker: false,
    text: `Hooray! We found ${amount} images.`
  })
}