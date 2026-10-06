// Functions
// 1. standard function
function functionName(arg1, arg2){
    console.log(arg1, arg2);
    return arg1 + arg2;
}

const ret = functionName(10, 20);
console.log(ret); // 30

// 2. variable referenced function
const variableFunction = function(){
    console.log("variable function");
}
const ret2 = variableFunction();
console.log(ret2); // undefined (nothing returned)

// 3. arrow function
const arrowFunc = (arg1) => "hello " + arg1; // implicit return
const ret3 = arrowFunc("John");
console.log(ret3); // hello John

const arrowFunc2 = (arg1, arg2) => {
    // if scope is opened, doesnot automatically return
    return arg1 + arg2;
}
const ret4 = arrowFunc2(10, 20);
console.log(ret4); // 30

const obj = {
    "name": "Alice",
    func1: function(){
        console.log("Scope normal", this.name);
    },
    func2: () =>{
        console.log("Scope arrow", this.name);
    }
}
obj.func1(); // Scope normal Alice
obj.func2(); // Scope arrow undefined (no scope in arrow/annoynomous)

// Closures/Callbacks
const outerFunction = (outerArg) => {
    let counter = outerArg;
    const innerFunction = () => {
        counter++;
        console.log(counter);
    }                                                                                                                                                              
    return innerFunction;
}
const closure1 = outerFunction(10);
closure1(); // 11
closure1(); // 12
closure1(); // 13

const closure2 = outerFunction(100);
closure2(); // 101
closure2(); // 102

// HOF -> Higher order function or callbacks
const hof1 = (arg1, callback) => {
    callback(arg1);
}
const callbackFunc = (arg1) => {
    console.log("callback function", arg1);
}
hof1("Hello", callbackFunc); // callback function Hello


const calculate = (num1, num2, cb) => {
    const result = cb(num1, num2);
    return result;
}
const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;

const sum1 = calculate(10, 20, addition);
console.log(sum1); // 30
const mul1 = calculate(10, 20, (num1, num2) => num1 * num2);
console.log(mul1); // 200

// make a callback function, takes 4 arguemts,
// num1, num2, num3, callback
// call the function with average calculation as callback
// call the function with max calculation as callback
// call the function with min calculation as callback

// const calculate2 = (num1, num2, num3, cb)
const average = (num1, num2, num3) => (num1 + num2 + num3) / 3;
const max = (num1, num2, num3)=> {
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }else if(num2 >= num1 && num2 >= num3){
        return num2;
    }else{
        return num3;
    }
}
const min = (num1, num2, num3) => Math.min(num1, num2, num3);
const calculate2 = (num1, num2, num3, cb) => {
    const result = cb(num1, num2, num3);
    return result;
}
const avg1 = calculate2(10, 20, 30, average);
console.log(avg1);

// Callbacks in iterators
const fruits = ["apple", "banana", "cherry", "grapes"];
const howToIterate = (item, index, arr ) => {
    console.log(index, item);
}
fruits.forEach(howToIterate); // 0 apple, 1 banana, 2 cherry, 3 grapes

fruits.forEach((item, index) => console.log("Hello " + item));
fruits.forEach(item => console.log("Single arg " + item)); // single arg, 
// no need to use () for single arg

// Map -> making new list from existing list
const newFruits = fruits.map((item, index) => item.toUpperCase());
console.log(newFruits); // ["APPLE", "BANANA", "CHERRY", "GRAPES"]
// frontend/(UI/UX)
const liTags = newFruits.map((elem, idx ) => {
    let className = "";
    if(idx % 2 === 0){
        className = "even bg-light";
    }else{
        className = "odd bg-dark text-light";
    }
    return `<li key="${idx}" class="${className}">${elem}</li>`;
});
console.log(liTags); 
// must have return statement

// filter -> filter out the list based on condition
const filteredFruits = fruits.filter( item => item.length > 5 );
console.log(filteredFruits); // ["banana", "cherry", "grapes"]
// must have return statement

// reduce -> reduce the list to a single value
const numbers = [ 10, 20, 30, 40 ];
const reducedValue = numbers.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    },
    100 // starting value of accumulator
);
// 100 + 10 + 20 + 30 + 40 = 200
console.log(reducedValue); // 200

const students = [
    { name: "Alice", age: 20, grade: 90},
    { name: "Bob", age: 22, grade: 80},
    { name: "Charlie", age: 21, grade: 85},
    { name: "Harry", age: 23, grade: 40}
];
// 1. using map, return the names of students only
// 2. using filter, return the students who have grade > 80
// 3. using filter return the failed students who have grade < 50
// 4. using reduce, return the average grade of students