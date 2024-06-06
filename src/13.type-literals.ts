/* En TypeScript, los literales de tipo (type literals) son un tipo especial que representa un valor específico en lugar de un rango de valores posibles. Esto significa que puedes decirle a TypeScript que una variable o expresión solo puede contener un valor exacto, en lugar de cualquier valor del tipo subyacente. */

//Funciona como una superConstante solo puedes asignarle el valor predefinido y no puede ser reasignado
// Literal de cadena
const saludo: 'Hola Mundo' = 'Hola Mundo';

// Literal numérico
let edad: 30 = 30;

// Literal booleano
const esValido: true = true;

//Donde mejor lo podemos utilizar es en los type alias, con unions type
type Color = 'negro' | 'blanco';

function mostrarColor(color: Color): void {
	console.log(color);
}
//vscode solo nos permite pasarle negro o blanco
mostrarColor('blanco');

export default {};
