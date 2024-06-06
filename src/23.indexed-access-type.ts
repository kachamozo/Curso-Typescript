//permite obtener el tipo de un valor específico dentro de un objeto o una tupla en función del índice o la clave utilizada para acceder a él

interface User {
	name: string;
	age: number;
	isAdmin: boolean;
}
//Ahora podemos crear un type en funcion a nuestra interface
type UserName = User['name']; // UserName = string

//Ejemplo
interface Product {
	id: number;
	name: string;
	price: number;
}

function getProductName(product: Product): string {
	// Validar que se está accediendo a la propiedad correcta
	if (typeof product['name'] === 'string') {
		return product['name'];
	} else {
		throw new Error("La propiedad 'name' no es una cadena de texto");
	}
}

export default {};
