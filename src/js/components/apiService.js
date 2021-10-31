export class Pixabay {
    constructor() {
      this.imagesQuery = '';
      this.page = 1;       
  }
  
  async fetchImages() {
    const BASE_URL = 'https://pixabay.com/api/'
    const KEY = '23833327-aee66bbf86a23c3fb1d188dcb'
    const searchParams = new URLSearchParams({
      q: this.imagesQuery,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
      page: this.page
      })

    let url = `${BASE_URL}?key=${KEY}&${searchParams}`
      try {
        const response = await fetch(url)
        return await response.json()
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