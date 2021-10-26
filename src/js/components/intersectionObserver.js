import { addNewImages } from '../renderingImages'

function intersectionObserver() {
  const callback = (entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        addNewImages()
        self.unobserve(lastItem)
      }
    });
  };

  const options = {
    threshold: 0.7,
  };

  const observer = new IntersectionObserver(callback, options);
  const items = document.querySelectorAll('.item');
  const lastItem = items[items.length - 1]
  observer.observe(lastItem)
}

export function setIntersectionObserver() {
  setTimeout(() => {
    intersectionObserver()
  }, 500)
}
