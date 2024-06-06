//En TypeScript, una unión de tipos (o "union types" en inglés) es una característica que permite que una variable pueda tener más de un tipo. Esto se logra utilizando el operador | (barra vertical) para separar los diferentes tipos que la variable puede tener.
let valor: number | string;

valor = 42; // válido
valor = 'hola'; // válido
//valor = true;     // no válido, TypeScript dará un error

//Los parametros pueden aceptar dos o mas tipos y se los asigna directamente
function printId(id: string | number): void {
	if (typeof id === 'number') console.log(id.toFixed(2));
	else console.log(id.toUpperCase());
}
printId(5);
printId('carlos');

//Validar si es un array
function saludaroPersonas(persona: string | string[]) {
	if (Array.isArray(persona))
		persona.forEach((el) => console.log(el.toUpperCase()));
	else console.log(persona.toUpperCase());
}
saludaroPersonas(['Jimena', 'Roly']);
saludaroPersonas('Valentina');

export default {};
