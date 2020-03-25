import ValuesController from "./Controllers/ValuesController.js";
import CarController from "./Controllers/CarController.js";
import JobController from "./Controllers/JobController.js";
import HouseController from "./Controllers/HouseController.js";

class App {
  valuesController = new ValuesController();
  carController = new CarController()
  jobController = new JobController()
  houseController = new HouseController()
}

window["app"] = new App();
