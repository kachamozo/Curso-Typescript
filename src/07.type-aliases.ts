//En TypeScript, un "type alias" (alias de tipo) es una forma de crear un nombre personalizado para un tipo existente o una combinación de tipos. Esto puede hacer que el código sea más legible y manejable, especialmente cuando se trabaja con tipos complejos o repetitivos.
type ID = number | string;

let userId: ID;

userId = 123; // válido
userId = 'ABC123'; // válido
// userId = true;      // no válido, TypeScript dará un error

//Tb se puede aplicar a parametros y funciones
type User = string | number;

function printId(id: User): void {
	if (typeof id === 'number') console.log(id.toFixed(2));
	else console.log(id.toUpperCase());
}
printId(554.4587);
printId('valentina');

//otro tipo de sintaxis para funciones, definimos todo en type y lo asignamos al nombre de la funcion(solo funciona con Arrow Function)
type Operacion = (a: number, b: number) => number;

const suma: Operacion = (a, b) => a + b;
const resta: Operacion = (a, b) => a - b;
console.log(suma(2, 3));

//========Type Alias con Interpolación======//
//podemos definir la forma de nuestro url
type Url = `http://${string}.com`;
type Url2 = `${'http' | 'https'}://${string}.com`;

//podemos mejorar lo anterior
type Protocol = 'http' | 'https';
type TLD = 'com' | 'es' | 'org' | 'dev';
type Url3 = `${Protocol}://${string}.${TLD}`;

function printUrl(url: Url3) {
	console.log(url);
}
printUrl('https://misitioweb.es');

export default {};
