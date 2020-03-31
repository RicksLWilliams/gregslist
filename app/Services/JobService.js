
import Job from "../Models/Job.js"
import store from '../store.js'

let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/jobs',
  timeout: 3000
})


class JobService {
  bid(jobId) {
    let foundJob = store.State.jobs.find(job => job.id == jobId)
    if (foundJob) {
      //foundJob.price += 100
      _api.put(jobId, foundJob)
        .then(res => {
          this.getJobs()
        })
        .catch(err => console.error(err))
    }
  }

  getJobs() {
    _api.get()
      .then(res => {
        console.log(res.data.data)
        let jobs = res.data.data.map(rawCarData => new Job(rawCarData))
        store.commit('jobs', jobs)
        console.log(store.State);
      })
      .catch(err => console.error(err))
  }

  delete(jobId) {
    _api.delete(jobId)
      .then(res => {
        console.log(res.data)
        //NOTE two ways of handling updating our data
        /*the second way is going and refetching the fresh data set from our database.
        pros: this is going to always be updated to reflect exactly what is in our database at the time.
        cons: This requires two calls to the database, one for our delete, and the second one for our get
        */
        this.getJobs()
      })
      .catch(err => console.error(err))
  }
  create(newJobObject) {
    /* NOTE
     RESTful conventions
    C - Create - POST /api/cars
    R - Read - GET /api/cars
    U - Update - PUT /api/cars/:carId
    D - Delete - DELETE /api/cars/:carId
    */
    //POST method always needs a url first, and then the data to create second
    _api.post('', newJobObject)
      .then(res => {
        console.log(res.data.data);
        //NOTE two ways of handling updating our data
        //First way is adding the returned new car we created into our current cars array
        //pros: only one call to db (our post method) cons: we cant trust that our local array contains all the same information as our DB. Someone else could of added a car between our get and post request
        let newJob = new Job(res.data.data)
        let jobs = [newJob, ...store.State.jobs]
        store.commit('jobs', jobs)
        //NOTE we could just call get cars again and it would handle getting all the cars and saving the state and redrawing.
        // this.getCars()
      })
      .catch(err => console.error(err))

  }
  constructor() {
    console.log("job service works")
    this.getJobs()
  }
}


const JOBSERVICE = new JobService()
export default JOBSERVICE