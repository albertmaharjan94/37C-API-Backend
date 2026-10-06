// variable type, var, let, const
const name = "John"; 
// const name = "John"; (invalid)
// name = "Doe"; (invalid)

let address = "Dillibazar";
// let address = "Dillibazar"; (invalid)
address = "Kathmandu"; // valid

var age = 30;
var age = 40;
age = 45;

// Hoisting
console.log(city); // valid, undefined
// variable and scope
if(true){
    // if scope/block
    let firstname = "John"; // scope bound variable
    const lastname = "Doe"; // scope bound variable
    var city = "Kathmandu"; // global/function bound variable
    console.log(firstname); // valid
    console.log(lastname); // valid
    console.log(city); // valid
}
// console.log(firstname); // invalid
// console.log(lastname); // invalid
console.log(city); // valid

// data types
const strVar = 'Hello world' // ";" is optional in JS
// string ``, '', ""
const numVar = 100; // number
const boolVar = true;
const nullVar = null; // intentionally empty value
const undefinedVar = undefined;
// let undefinedVar2; // undefined
const symbolVar = Symbol('symbol'); // unique and immutable
const symbolVar2 = Symbol('symbol'); // unique and immutable
console.log(symbolVar === symbolVar2); // false
// typeof operator
console.log(typeof strVar); // string

// =, ==, ===
const num1 = 10; // = "assignment operator"
const num2 = "10";
console.log(num1 == num2); // == loose equality operator, true
console.log(num1 === num2); // === strict equality operator, false

// collection/list
const arr = [1,2,"three", true, null, undefined]; 
console.log(arr[0]); // 1
arr.pop(); // remove last element
arr.push("new element");
arr.shift(); // remove first element
arr.unshift("four"); // add element at first

// iteration
for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}
// for..in, iterate index
for(const index in arr){
    console.log(index, arr[index]);
}
// for..of, iterate value/element
for(const value of arr){
    console.log(value);
}

// spread operator ...
let arr1 = [10, 20, 30];
let arr2 = [60, 70, 80];
let arr3 = [arr1, arr2]; 
console.log(arr3); // [[10, 20, 30], [60, 70, 80]]
let arr4 = [...arr1, arr2]; 
console.log(arr4); // [10, 20, 30, [60, 70, 80]]
let arr5 = [...arr1, 40, 50, ...arr2];
console.log(arr5); // [10, 20, 30, 40, 50, 60, 70, 80]

// object/ JSON 
const obj1 = {
    name: "John",
    'age': 30,
    address: "Dillibazar",
    isMarried: false,
    hobbies: ["reading", "traveling", "coding"],
    location: {
        lat: 12.3456,
        lng: 98.7654,
        tags: ["city", "urban"]
    }
}
// access object properties
console.log(obj1.name); // dot notation
console.log(obj1['address']); // bracket notation
const obj2 = { ...obj1, salary: 50000 }; // spread operators
console.log(obj2);

console.log(obj1.hobbies);
console.log(obj1.hobbies[1]); // traveling

console.log(obj1.location);
console.log(obj1.location.lat);

// cw "urban" print
console.log(obj1.location.tags[1]); // urban

obj1.newkey = "new value"; // add new key-value pair

// const obj1= {}; // invalid
// obj1 = {}; // invalid

// fallback
console.log(obj1.detail); // undefined
// ??, || 
console.log(obj1.detail || "No detail found"); // No detail found
console.log(obj1.detail ?? "No detail found"); // No detail found
console.log(obj1.name ?? "No name found"); // John

const check = 0;
console.log(check || "No value found"); // No value found, falsy value
console.log(check ?? "No value found"); // 0

// null chaining
// console.log(obj1.detail.info.data); // error
// cannot refernce undefined or null
console.log(obj1.detail?.info?.data); // undefined

console.log(obj1.detail?.info?.data ?? "No data found"); // No data found

// destructure
const { age } = obj1; // object destructuring
// same as
// const age = obj1.age;
const { name: fname, hobbies } = obj1; // object destructuring with alias
// same as 
// const fname = obj1.name;
// const hobbies = obj1.hobbies;

const [firstHobby, secondHobby] = hobbies; // array destructuring
console.log(firstHobby); // reading
console.log(secondHobby); // traveling
