// 1. json: stringify/parse

const student = {
    name: 'King Khan',
    age: 35,
    movies: ['Amar Jan', 'Priya Amar Priya']
}

const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);

const studentObject = JSON.parse(studentJson);
console.log(studentObject);


// 2. fetch

fetch('url link')
    .then(response => response.json())
    .then(data => console.log(data));


//  3. keys, values declare   

const keys = Object.keys(student)
const values = Object.values(student)


// 4.copy product array and then add new product

const products = [
    { name: 'laptop', price: 10000, brand: 'lenovo', color: 'black' },
    { name: 'phone', price: 15000, brand: 'nokia', color: 'black-white' },
    { name: 'iphone', price: 20000, brand: 'i-phone', color: 'white' },
    { name: 'computer', price: 25500, brand: 'pc', color: 'green' },
    { name: 'mobile', price: 15500, brand: 'samsung', color: 'silver' },
    { name: 'bike', price: 15000, brand: 'pulture', color: 'white-ass' },
]

const newProduct = { name: 'MotorBike', price: 180000, brand: 'aphache', color: 'white-ass' };

const newAddProducts = [...products, newProduct];
console.log(newAddProducts)




