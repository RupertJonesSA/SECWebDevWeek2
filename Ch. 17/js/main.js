// Objects
// Key-value pairs in curly braces
const myObj = {name: "Dave"}

const anotherObj = {
    // Attributes
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning: "coffee",
        afternoon: "iced tea"
    },
    // Methods
    action: function(){
        // Keyword "this" refers to the current object
        return this.alive; 
    }
};
console.log(anotherObj.action());

const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vroooooom!";
    }
};
// Pretty much inheritance
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){
    return "Whoosh!"; 
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function(){
    return "Shhh.."; 
};
console.log(tesla.engine());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// destructuring objects
const {vocals, guitar, drums} = band;
console.log(vocals);
console.log(guitar);

function sings({vocals}){
    return vocals;
}
console.log(sings(band));