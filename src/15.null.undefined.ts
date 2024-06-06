/* En TypeScript, el signo de exclamación (!) se utiliza como operador de aserción de tipo no nulo. Se coloca después del tipo de una variable o expresión para indicar a TypeScript que estás seguro de que el valor no será null o undefined. */

function getSomeValue(number: number) {
	if (number > 4) {
		return {
			property: 'Hola Mundo de Typescript',
		};
	}
}
//Es útil para evitar errores de tiempo de ejecución que pueden ocurrir cuando se intenta acceder a propiedades de null o undefined.
let value = getSomeValue(5); // Supongamos que esta función podría devolver null o undefined
console.log(value!.property); // Asegura que value no es null ni undefined antes de acceder a.property

export default {};
