import _houseService from '../Services/HouseService.js'
import _store from '../store.js'


//NOTE we need the element to put them in, access to the array of cars in the store, blank template to add them to, and a template for how they are displayed
function _drawHouses() {
  let template = ''
  let houses = _store.State.houses

  houses.forEach((house, index) => template += house.getTemplate(index))
  document.getElementById("houses").innerHTML = template
}


export default class HouseController {
  constructor() {
    console.log("House controller works")
    _drawHouses()
  }


  create(event) {
    //debugger
    event.preventDefault() // prevents the page from refreshing
    let formData = event.target
    let newHouseObject = {
      city: formData.city.value,
      state: formData.state.value,
      year: formData.year.value,
      size: formData.size.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    }

    _houseService.create(newHouseObject)
    formData.reset()
    $('#add-house-modal').modal('toggle')
    _drawHouses()

    console.log(newHouseObject)
  }

  delete(index) {
    _houseService.delete(index)
    _drawHouses()
  }


}