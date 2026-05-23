//Destructuring es extraer valores de objetos y arrays en una sola línea:
const user = { name: "Eze", age: 35, city: "BsAs" };
const { name, age } = user;  // en vez de user.name, user.age

console.log(user); 

//Spread (...) copia o expande:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]
const arr3 = [12, 13, 14, ...arr1];  // [12, 13, 14, 1, 2, 3]
const userCopy = { ...user, age: 36 };  // copia y sobrescribe age
console.log(userCopy);

