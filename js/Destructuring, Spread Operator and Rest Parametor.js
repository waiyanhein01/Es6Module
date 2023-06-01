// Destructuring
// Object Destructuring 
const customer = {name: "Wai Yan Hein", age: 23, email: "wyan00196@gmail.com"};
const {name, age, email} = customer;

// Array Destructuring 
const cars = ["Toyota", "BMW", "Mercede"];
const [carOne, carTwo, carThree] = cars;

// Spread Operator
//Object
const customer1 = {name: "Wai Yan Hein", age: 23, email: "wyan00196@gmail.com"};
const objectOperator = {...customer1}

// Array
const cars1 = ["Toyota", "BMW", "Mercede"];
const arrayOperator = [...cars1]

// Rest Parametor
const calculate = (...params) => {
    let total = 0;
    for (let i = 0; i < params.length; i++) {
        total += params[i]    
    }
    return total;
}

let result = calculate(1, 2, 3)



