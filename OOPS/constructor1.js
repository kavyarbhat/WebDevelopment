class Car {
    constructor(model, brand, milage) {
      this.model = model;
      this.brand = brand;
      this.milage = milage;
    }
    isCarAvailable(getDetails) {
      console.log("Yes, it's available");
    }
    topSpeedof(speed) {
      console.log(speed);
    }
  }
  
  class Audi extends Car {
    constructor(model, brand, milage, topSpeed) {
      super(model, brand, milage);
      this.topSpeed = topSpeed;
    }
  
    //method overriding
    isCarAvailable(getDetails = "") {
      if (
        getDetails == "Audi" ||
        getDetails == "BMW" ||
        getDetails == "Maruthi"
      ) {
        console.log("Currently on Stock");
        super.topSpeedof(200);
      } else {
        console.log("Currently Unavailabe");
      }
    }
}
  
const car1 = new Audi("Q3", "Audi", 20, 240);
car1.isCarAvailable("BMW");
  