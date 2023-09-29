// Javascript Classes
class Pizza{
    crust = "original";
    // Hash indicates private field
    #sauce = "traditional";
    #size;
    constructor(pizzaType, pizzaSize, pizzaCrust){
        this.type = pizzaType;
        this.#size = pizzaSize;
        this.crust = pizzaCrust;
        this.toppings = [];
    }

    getCrust(){
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    getToppings(){
        return this.toppings;
    }

    setToppings(topping){
        this.toppings.push(topping);
    }

    bake(){
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}

class SpecialtyPizza extends Pizza{
    constructor(pizzaType, pizzaCrust, pizzaSize){
        super(pizzaType, pizzaCrust, pizzaSize);
        this.specialType = "The Works"; 
    }
    slice(){
        console.log(`Our ${this.specialType} ${this.size} pizza has 8 slices.}`);
    }
}
const myPizza = new Pizza("pepperoni", "small", "stuffed");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());

newPizza = new SpecialtyPizza("pepperoni", "medium", "stuffed");
newPizza.slice();

// Factory Function
function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} pizza.`)
    };
}

const myPizzaFactory = pizzaFactory("small");
myPizzaFactory.bake();