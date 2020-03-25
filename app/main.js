import ValuesController from "./Controllers/ValuesController.js";
import CarController from "./Controllers/CarController.js";
import JobController from "./Controllers/JobController.js";

class App {
  valuesController = new ValuesController();
  carController = new CarController()

  jobController = new JobController()
}

window["app"] = new App();
