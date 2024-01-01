const person={
    name:"Kavya",
    address:{
        city: "Bangalore",
        country: "India"
    },
    printFullName: function() {
        console.log("kavya bhat");
    },
    greet: function(greetings){
        console.log(greetings, "How you doing")
    },
    "is adults": true,
    0:"students",
    interests: ["badmiton","sky diving", "scuba diving"]
};
console.log(person.name);
console.log(person.address.city);
person.printFullName();
console.log(person["is adults"]);
console.log(person[0]);
person.greet("Hello");
console.log(person.interests[2])