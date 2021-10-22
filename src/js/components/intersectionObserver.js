import { addNewImages } from '../renderingImages'

export function intersectionObserver() {
  const callback = (entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry)
        console.log(entry.target)
        addNewImages()
        self.disconnect();
      }
    });
  };

  const options = {
    threshold: 0.8,
  };

  const observer = new IntersectionObserver(callback, options);
  const items = document.querySelectorAll('.item');
  const lastItem = items[items.length - 1]

  observer.observe(lastItem)
}
