import refs from './refs'
export function showMoreBtn(add, remove) {
  refs.moreBtnEl.classList.add(add)
  refs.moreBtnEl.classList.remove(remove)
}
export function showCirclesLoading(add, remove) {
  refs.circlesEl.classList.add(add)
  refs.circlesEl.classList.remove(remove)
}