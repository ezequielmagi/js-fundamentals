// 1. Dado este objeto, extraé nombre y email en variables sueltas usando destructuring.
const usuario = {
  id: 1,
  nombre: "Ezequiel",
  email: "eze@example.com",
  rol: "developer"
};
// TU CÓDIGO ACÁ

const { nombre, email } = usuario;

console.log({ nombre, email });

// 2. Dado este array, extraé el primer elemento y el resto en otra variable.
const colores = ["rojo", "verde", "azul", "amarillo"];
// TU CÓDIGO ACÁ (pista: usá rest)
const [primero, ...resto] = colores;
console.log({ primero, resto });



// 3. Creá una función `crearUsuario` que reciba un objeto y devuelva
//    una COPIA del objeto con un campo extra `creadoEn` con la fecha actual.
//    NO mutes el original. Usá spread.
// TU CÓDIGO ACÁ

function crearUsuario(usuario) {
  return { ...usuario, creadoEn: new Date() };
}   

console.log(crearUsuario(usuario));

// 4. Hacé una función `sumarTodos` que reciba cualquier cantidad de números
//    y devuelva la suma. Usá rest.
// TU CÓDIGO ACÁ

function sumarTodos(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}

// Probá todo con console.log al final.
console.log(sumarTodos(1, 2, 3, 4, 5)); 