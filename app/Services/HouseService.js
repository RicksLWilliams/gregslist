
import House from "../Models/House.js"
import _store from '../store.js'


class HouseService {
  delete(index) {
    _store.State.houses.splice(index, 1)
  }
  create(newHouseObject) {
    let newHouse = new House(newHouseObject)
    _store.State.houses.push(newHouse)
    console.log(_store.State.houses)
  }
  constructor() {
    console.log("House service works")
  }
}


const HOUSESERVICE = new HouseService()
export default HOUSESERVICE