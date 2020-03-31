import _houseService from '../Services/HouseService.js'
import store from '../store.js'


//NOTE we need the element to put them in, access to the array of cars in the store, blank template to add them to, and a template for how they are displayed
function _drawHouses() {
  let template = ''
  let houses = store.State.houses

  houses.forEach((house, index) => template += house.getTemplate(index))
  document.getElementById("houses").innerHTML = template
}


export default class HouseController {
  constructor() {
    console.log("house controller works")
    store.subscribe('houses', _drawHouses)
  }


  create(event) {
    //debugger
    event.preventDefault() // prevents the page from refreshing
    let formData = event.target
    let newHouseObject = {
      bedrooms: formData.bedrooms.value,
      bathrooms: formData.bathrooms.value,
      year: formData.year.value,
      price: formData.price.value,
      levels: formData.levels.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    }

    _houseService.create(newHouseObject)
    formData.reset()
    $('#add-house-modal').modal('toggle')

    console.log(newHouseObject)
  }

  delete(houseId) {
    _houseService.delete(houseId)
  }


}