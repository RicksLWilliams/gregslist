
export default class Job {
  constructor(data) {
    this.title = data.title
    this.company = data.company
    this.minWage = data.minWage
    this.maxWage = data.maxWage
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided."
  }

  getTemplate(index) {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h1>Make: ${this.title}</h1>
      <h5>Model: ${this.company}</h5>
      <h5>Year: ${this.minWage}</h5>
      <h5>Price: ${this.maxWage}</h5>
      <img class="img-fluid" src="${this.imgUrl}" />
      <button class="btn btn-danger btn-block" onclick="app.carController.delete(${index})">Delete</button>
    </div>`
  }


}