
export default class House {
  constructor(data) {
    this.city = data.city
    this.state = data.state
    this.year = data.year
    this.size = data.size
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided."
  }

  getTemplate(index) {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h1>city: ${this.city}</h1>
      <h5>state: ${this.state}</h5>
      <h5>year: ${this.year}</h5>
      <h5>size: ${this.size}</h5>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button class="btn btn-danger btn-block" onclick="app.houseController.delete(${index})">Delete</button>
    </div>`
  }


}