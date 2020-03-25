import _jobService from '../Services/JobService.js'
import _store from '../store.js'


//NOTE we need the element to put them in, access to the array of cars in the store, blank template to add them to, and a template for how they are displayed
function _drawJobs() {
  let template = ''
  let jobs = _store.State.jobs

  jobs.forEach((job, index) => template += job.getTemplate(index))
  document.getElementById("jobs").innerHTML = template
}


export default class CarController {
  constructor() {
    console.log("job controller works")
    _drawJobs()
  }


  create(event) {
    event.preventDefault() // prevents the page from refreshing
    let formData = event.target
    let newJobObject = {
      make: formData.title.value,
      model: formData.company.value,
      year: formData.minWage.value,
      price: formData.minWage.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    }

    _jobService.create(newJobObject)
    formData.reset()
    $('#add-job-modal').modal('toggle')
    _drawJobs()

    console.log(newJobObject)
  }

  delete(index) {
    _jobService.delete(index)
    _drawJobs()
  }


}