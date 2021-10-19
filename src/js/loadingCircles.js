import refs from './refs'

export function showCirclesLoading(add, remove) {
  refs.circlesEl.classList.add(add)
  refs.circlesEl.classList.remove(remove)
}