// typeof sirve para extraer el tipo atraves de un valor , y ese valor puede ser una funcion, array, objeto, etc

let str: string = 'Hola';

if (typeof str === 'string') {
	console.log('str es una cadena de texto');
} else {
	console.log('str no es una cadena de texto');
}

//En este ejemplo se usa para tipar parametros sin tener una interface | type, el typeof extrae los tipos del objeto pasado

const usuario = {
	nombre: 'Jimena',
	edad: 35,
};

function saludarUsuario(persona: typeof usuario) {
	console.log(`Hola ${usuario.nombre}`);
}
saludarUsuario(usuario);

export default {};
