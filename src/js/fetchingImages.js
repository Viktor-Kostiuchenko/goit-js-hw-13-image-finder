export class Pixabay {
    constructor() {
      this.imagesQuery = '';
      this.page = 1;       
  }
  
    async fetchImages() {
      const BASE_URL = 'https://pixabay.com/api/'
      const KEY = '23833327-aee66bbf86a23c3fb1d188dcb'
      let url = `${BASE_URL}?key=${KEY}&q=${this.imagesQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${this.page}`

      this.updatePage()
      
      try {
        const response = await fetch(url)
        const newImages = await response.json()
        return newImages.hits
      } catch (error) {
        alert(`Query failed ${error}`)
      }
  }
  
    updatePage(){
      this.page +=1
    }
    resetPage() {
      this.page = 1;
    }
    get query() {
      return this.imagesQuery 
    }
    set query(newQuery) {
      this.imagesQuery  = newQuery
    }
}