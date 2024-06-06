/* permiten definir funciones, clases e interfaces que pueden trabajar con diferentes tipos de datos sin necesidad de escribir código repetitivo. 
El tipo T es como una variable que almacena el tipo de dato */
//Funciones
function filtrarValor<T>(valor: T, valores: T[]): T[] {
	return valores.filter((el) => el === valor);
}

const resultado = filtrarValor<string>('mena', ['mena', 'roly']);
console.log(resultado);

const resul = filtrarValor<number>(1, [1, 2, 3]);
console.log(resul);

//Clases
class Stack<T> {
	public items: T[] = [];

	push(item: T): void {
		this.items.push(item);
	}

	pop(): T | undefined {
		return this.items.pop();
	}
}
const stack = new Stack<number>();
stack.push(5);
console.log(stack.items);

//Interfaces
interface Animal<T> {
	name: string;
	age: T;
}

//Type
type Person<T> = {
	name: string;
	id: T;
};
type User = Person<{ id: 1; isGimnasta: true }>;

export default {};
