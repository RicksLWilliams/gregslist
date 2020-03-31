
export default class Job {
  constructor(data) {
    this.id = data.id || data._id
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description || "No description provided."
  }

  getTemplate(index) {
    return /*html*/ `
    <div class="col-4 border border-info rounded shadow">
      <h1>title: ${this.jobTitle}</h1>
      <h5>company: ${this.company}</h5>
      <h5>hours: ${this.hours}</h5>
      <h5>rate: ${this.rate}</h5>
      <h5>description: ${this.description}</h5>
      <button class="btn btn-danger btn-block" onclick="app.jobController.delete('${this.id}')">Delete</button>
    </div>`
  }


}