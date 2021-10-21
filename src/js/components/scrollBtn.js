const scrollBtn = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', ()=> {
   if (window.pageYOffset > 500) {
      scrollBtn.classList.add('active')
    } else {
      scrollBtn.classList.remove('active')
  }
})

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  })
})