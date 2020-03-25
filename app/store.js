import Value from "./Models/Value.js";
import Car from "./Models/Car.js";
import Job from "./Models/Job.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Car[]} */
  cars: [],
 /** @type {Job[]} */
  jobs: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
