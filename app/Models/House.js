
export default class House {
  constructor(data) {
    this.id = data.id || data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.year = data.year
    this.price = data.price
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided."
  }

  getTemplate(index) {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h1>bedrooms: ${this.bedrooms}</h1>
      <h5>bathrooms: ${this.bathrooms}</h5>
      <h5>year: ${this.year}</h5>
      <h5>price: ${this.price}</h5>
      <h5>levels: ${this.levels}</h5>
      <h5>description: ${this.description}</h5>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button class="btn btn-danger btn-block" onclick="app.houseController.delete('${this.id}')">Delete</button>
    </div>`
  }


}