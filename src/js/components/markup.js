import '../../sass/styles.scss'

export class Markup {
  constructor() {
    this.galleryEl = document.querySelector('.gallery'),
    this.circlesEl = document.querySelector('.circles'),
    this.scrollBtnEl = document.querySelector('.scroll-to-top')
  }

  createImagesMarkup(template, data) {
    this.galleryEl.insertAdjacentHTML('beforeend', template(data))
  }

  clearImagesMarkup() {
    this.galleryEl.innerHTML = ''
  }

  callScrollBtn() {
    window.addEventListener('scroll', ()=> {
      if (window.pageYOffset > 500) {
          this.scrollBtnEl.classList.add('active')
        } else {
          this.scrollBtnEl.classList.remove('active')
      }
    })

    this.scrollBtnEl.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
      })
    })
  }

  showCirclesLoading(oldClass, newClass) {
    this.circlesEl.classList.replace(oldClass, newClass)
  }

  setIntersectionObserver(addNewImages) {
    setTimeout(() => {
      const callback = (entries, self) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            addNewImages()
            self.unobserve(lastItem)
          }
        });
      };

      const options = {
        rootMargin: '200px'
      };

      const observer = new IntersectionObserver(callback, options);
      const items = document.querySelectorAll('.item');
      const lastItem = items[items.length - 1]
      observer.observe(lastItem)
    }, 500)
  }

}
