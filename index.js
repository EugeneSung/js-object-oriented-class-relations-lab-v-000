let store = {drivers: [], passengers: [], trip: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.name = name
    this.id = driverId++;

    store.drivers.push(this)
  }

  passengers(){
    return this.trips().map((trip) => {
      return trip.passenger();
    })
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    })
  }




}

class Passenger {
  constructor(name){
    this.name = name
    this.id = passengerId++;
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    })
  }
  drivers(){
    return this.trips().map((trip) => {
      return trip.driver();
    })
  }
}


class Trip {
  constructor(driver, passenger){
    this.id = tripId++;

    if(driver){
    this.driverId = driver.id;
    }
    if(passenger){
    this.passengerId = passenger.id;
    }

    store.trips.push(this);

  }
  setDriver(driver){
    this.driverId = driver.id
  }
  setPassenger(passenger){
    this.passengerId = passenger.id
  }

  passenger(){
   return store.passengers.find(passenger => {
     return passenger.id === this.passengerId
   })
 }
 driver(){
  return store.drivers.find(driver => {
    return driver.id === this.driverId
  })
}

}
