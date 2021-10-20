import { error, notice } from '@pnotify/core'

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';



export function onError() {
  error({
  title: 'Oops 😟',
  text: 'Nothing is found',
  sticker: false,
  width: 250
});
}

export function onNotice() {
  notice({
  title: 'Hmmm 🤔',
  text: 'Please enter a more specific query',
  sticker: false,
  width: 250
});
}