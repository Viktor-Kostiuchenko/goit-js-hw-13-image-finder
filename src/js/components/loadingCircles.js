import refs from '../refs/refs'

export function showCirclesLoading(oldClass, newClass) {
  refs.circlesEl.classList.replace(oldClass, newClass)
}