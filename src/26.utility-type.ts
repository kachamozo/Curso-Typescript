//Las utility types (tipos útiles) en TypeScript son funciones de tipo predefinidas que permiten realizar transformaciones y operaciones convenientes sobre tipos existentes

//=========== AWAITED ===========
//toma el tipo que resuelve la promesa

type TaskResult = Promise<string>;

type TaskPromiseResult = Awaited<Promise<string>>;
type TaskPromiseResult2 = Awaited<Promise<number>>;

//PARTIAL -> Crea un tipo donde todas las propiedades de T son opcionales.
interface Usuario {
	nombre: string;
	apellido: string;
	edad: number;
}

type UsuarioParcial = Partial<Usuario>; // Define un nuevo tipo donde todas las propiedades son opcionales

const usuarioParcial: UsuarioParcial = { nombre: 'Juan' }; // Acepta un objeto con solo la propiedad "nombre"

//============ REQUIRED ===============
/* Crea un tipo donde todas las propiedades de T son requeridas. Es útil cuando 2 o mas funciones usan la misma interface o type
ya que una funcion solo puede necesitar una propiedad y otra funcion require obligatoriamente todas las propiedades
Asi no evitamos de crear interfaces repetidas solo con unos pocos cambios */

interface Estudiante {
	nombre: string;
	edad?: number;
}
function saludar(estudiante: Estudiante): void {
	console.log(`Hola ${estudiante.nombre}`);
}
saludar({ nombre: 'Roly' }); //no es obligatorio pasarle la edad

function mayorEdad(estudiante: Required<Estudiante>): void {
	if (estudiante.edad > 18)
		console.log(`${estudiante.nombre} es mayor de edad`);
}
mayorEdad({ nombre: 'Roly', edad: 37 });

//============= READONLY ============
//Crea un tipo inmutable a partir de T, haciendo que todas sus propiedades sean de solo lectura.
type Estilista = {
	nombre: string;
	lugar: string;
	edad: number;
};
type SoloLectura = Readonly<Estilista>; //todas las propiedades son de solo lectura

//============= RECORD ============
//Crea un tipo que representa un objeto cuyas claves son de tipo K y valores de tipo T.
interface PosicionInfo {
	x: number;
	y: number;
}
type Mover = 'izquierda' | 'derecha';
type PosicionCompleta = Record<Mover, PosicionInfo>;
const posicion: PosicionCompleta = {
	derecha: { x: 4, y: 5 },
	izquierda: { x: 5, y: 7 },
};

//============= PICK ============
//Con pick eleginos que propiedades son las que usaremos. Tb funciona con el operador ? condicional pero es mejor usar pick
interface User {
	id: number;
	email: string;
	password: string;
}
function registerUser(user: Pick<User, 'email' | 'password'>) {
	//logica del registro con el detalle que el id se le asigna luego de registrar
}
registerUser({
	email: 'asd@gmail.com',
	password: 'admin123',
});

//============= OMIT ============
//Es lo contrario de pick aqui omitimos una prop. siempre itera un objeto
function submitOmit(user: Omit<User, 'id'>) {
	//logica
}
submitOmit({
	email: 'asd@gmail.com',
	password: 'admin123',
});

//============= EXCLUDE ============
//Excluye los tipos de un type-union
type userId = string | number | boolean;
function upperCaseId(id: Exclude<userId, number | boolean>) {
	id.toUpperCase(); //con exclude le estamos diciendo al id que sea solo de tipo string
}

//============= NONNULLABLE ============
//le quita udefined y null al type-union
type GetNamePromise = string | undefined | null;
function getName(name: NonNullable<GetNamePromise>) {
	name.toUpperCase(); // aqui le asignamos a name que la promesa se va resolver como string
}

//============= PARAMETERS ============
//Esto extrae en una tupla los tipos de los parametros
function dog(name: string, age: number) {}
type DogParameters = Parameters<typeof dog>; //Aqui estamos creando un type en base a una funcion
const dog1: DogParameters = ['rambo', 2]; //Dog1 tiene que ser una tupla [string, number]

//============= STRING ============
//solo funciona con const ya que name toma el valor literal de Valentina y no string(let)
const name = 'Valentina';
const nameUpper: Uppercase<typeof name> = 'VALENTINA';
const nameLower: Lowercase<typeof name> = 'valentina';
const nameCapitalize: Capitalize<typeof name> = 'Valentina';
const nameUncapitalize: Uncapitalize<typeof name> = 'valentina';

export default {};
