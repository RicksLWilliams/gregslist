import _jobService from '../Services/JobService.js'
import store from '../store.js'


//NOTE we need the element to put them in, access to the array of cars in the store, blank template to add them to, and a template for how they are displayed
function _drawJobs() {
  let template = ''
  let jobs = store.State.jobs

  jobs.forEach((job, index) => template += job.getTemplate(index))
  document.getElementById("jobs").innerHTML = template
}


export default class JobController {
  constructor() {
    console.log("job  controller works")
    store.subscribe('jobs', _drawJobs)
  }


  create(event) {
    //debugger
    event.preventDefault() // prevents the page from refreshing
    let formData = event.target
    let newJobObject = {
      jobTitle: formData.jobTitle.value,
      company: formData.company.value,
      hours: formData.hours.value,
      rate: formData.rate.value,
      description: formData.description.value
    }

    _jobService.create(newJobObject)
    formData.reset()
    $('#add-job-modal').modal('toggle')


    console.log(newJobObject)
  }

  delete(jobId) {
    console.log("job controller delete", jobId)
    _jobService.delete(jobId)
  }


}