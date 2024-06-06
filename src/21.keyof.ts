// keyof es un operador que se utiliza para obtener el tipo de todas las claves (propiedades) de un tipo de objeto. Permite acceder a las claves de un objeto como un tipo de cadena.
interface Mover {
	derecha: number;
	izquierda: number;
}

function movimiento(direccion: keyof Mover) {
	console.log(`Moverse a la ${direccion}`);
}
movimiento('derecha');

//otro ejemplo
type Person = {
	name: string;
	age: number;
	email: string;
};

// Usamos keyof para obtener el tipo de las claves del objeto Person
type PersonKeys = keyof Person;

// En este caso, PersonKeys será igual a "name" | "age" | "email"
export default {};
