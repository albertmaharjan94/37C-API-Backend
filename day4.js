// CRUD example
let students = [
    { id: 1, name: "John", age: 20 }
];
// Create using promise 
const createStudent = (student) => new Promise(
    (resolve, reject) => {
        const { id, name, age } = student;
        if(!id) return reject(new Error("id is requred"));
        students.push(student);
        // alternatives
        // students = [...students, student];
        return resolve(student);
    }
);
createStudent({ id: 2, name: "Alice", age: 22 })
.then( (student) => console.log("Student created", student) )
.catch( (err) => console.log(err.message) );

// Read
// student with id 1
const readOne = students.find( (student) => student.id === 1 );
console.log(readOne); // { id: 1, name: "John", age: 20 }
// with index
const readOneIndex = students.findIndex( (student) => student.id === 1 );
console.log(readOneIndex, students[readOneIndex]); // 0 { id: 1, name: "John", age: 20 }

// update with id
// with index 
const updateIndex = students.findIndex( (student) => student.id === 1 );
// if not found, findIndex returns -1
students[updateIndex].name = "New name";
students[updateIndex] = { ...students[updateIndex], name: "John Doe" };
students[updateIndex] = { ...students[updateIndex], ...{ name: "Update", status: "new" } };
// delete with index
const deleteIndex = students.findIndex( (student) => student.id === 1 );
students.splice(deleteIndex, 1);

// your application should be 6 functions to perform CRUD operations using Promise
// All function should be a Promise
// 1. createProduct 
// -- takes product object as argument and add to products array
// -- destructure id, name and price
// -- check if id is not present reject with error
// -- if name is missing, replace with "Unknown Product" 
// -- if price is missing, replace with 0
// 2. getProducts, 
// -- returns all products after 2 seconds delay using Promise
// 3. getProductById, 
// -- takes id as argument and returns product with that id after 1 second delay 
// -- if not found, reject with error
// 4. searchProduct,
// -- takes name as argument and returns all products that match the name
// -- if not found, return empty object
// 5. updateProduct, 
// -- takes id and update object as arguments, 
// -- check if id is not present reject with error
// -- destructure name and price and update in found id
// finds product by id and updates it with the update object, 
// if not found, reject with error
// 6. deleteProduct
// -- takes id as argument and deletes product with that id,
// -- check if id is not present reject with error
// -- if not found, reject with error, if deleted, resolve with success message

