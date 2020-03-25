
import Job from "../Models/Job.js"
import _store from '../store.js'


class JobService {
  delete(index) {
    _store.State.jobs.splice(index, 1)
  }
  create(newJobObject) {
    let newJob = new Job(newJobObject)
    _store.State.jobs.push(newJob)
    console.log(_store.State.jobs)
  }
  constructor() {
    console.log("Job service works")
  }
}


const JOBSERVICE = new JobService()
export default JOBSERVICE