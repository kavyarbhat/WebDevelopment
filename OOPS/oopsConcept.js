//non-parameterized constructor
function Bike(){
    this.build = "Hero",
    this.model = "xpulse200",
    this.topSpeed = "126"
    this.feeling = "smooth"
  
}
const bike1=new Bike();
console.log(bike1.build);
console.log (bike1)
delete bike1.feeling;
console.log (bike1)

// parameterized constructor
function Car(Brand,gear,topSp){
    this.build1 = Brand,
    this.model1 = gear,
    this.topSpeed1= topSp
    this.accelerate = function (accelerate){
        console.log("it starts to accelerate",accelerate)
    }
    this.brake = function (deaccelerate){
        console.log("it starts to decceleate",deaccelerate)
    }
}
const car1=new Car("maruti","2nd gear",80);
const car2=new Car("BMW","2nd gear",200);
console.log(car1)
console.log(car2)
car2.accelerate("20km/h")
car2.brake("23km/h")