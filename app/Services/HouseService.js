
import House from "../Models/House.js"
import store from '../store.js'

let _api = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/houses',
  timeout: 3000
})


class HouseService {

  bid(houseId) {
    let foundHouse = store.State.cars.find(house => house.id == houseId)
    if (foundHouse) {
      //foundHouse.price += 100
      _api.put(houseId, foundHouse)
        .then(res => {
          this.getHouses()
        })
        .catch(err => console.error(err))
    }
  }

  getHouses() {
    _api.get()
      .then(res => {
        let houses = res.data.data.map(rawHouseData => new House(rawHouseData))
        store.commit('houses', houses)
        console.log(store.State);
      })
      .catch(err => console.error(err))
  }


  delete(houseId) {
    _api.delete(houseId)
      .then(res => {
        console.log(res.data)
        //NOTE two ways of handling updating our data
        /*the second way is going and refetching the fresh data set from our database.
        pros: this is going to always be updated to reflect exactly what is in our database at the time.
        cons: This requires two calls to the database, one for our delete, and the second one for our get
        */
        this.getHouses()
      })
      .catch(err => console.error(err))
  }

  create(newHouseObject) {
    /* NOTE
     RESTful conventions
    C - Create - POST /api/cars
    R - Read - GET /api/cars
    U - Update - PUT /api/cars/:carId
    D - Delete - DELETE /api/cars/:carId
    */
    //POST method always needs a url first, and then the data to create second
    _api.post('', newHouseObject)
      .then(res => {
        console.log(res.data.data);
        //NOTE two ways of handling updating our data
        //First way is adding the returned new car we created into our current cars array
        //pros: only one call to db (our post method) cons: we cant trust that our local array contains all the same information as our DB. Someone else could of added a car between our get and post request
        let newHouse = new House(res.data.data)
        let houses = [newHouse, ...store.State.newHouse]
        store.commit('houses', houses)
        //NOTE we could just call get cars again and it would handle getting all the cars and saving the state and redrawing.
        // this.getCars()
      })
      .catch(err => console.error(err))

  }

  constructor() {
    console.log("houses service works")
    this.getHouses()
  }
}


const HOUSESERVICE = new HouseService()
export default HOUSESERVICE