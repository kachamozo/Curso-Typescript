//los parametros siempre tienen que estar tipados, lo que devuelve la funcion lo puede inferir
function getNombre(name: string): string {
	return `El nombre ingresado es ${name}`;
}
//Como sabe que la funcion nos retorna un string no da todos los metodos de string
getNombre('Carla').toUpperCase();

//tb esta disponible con funciones anonimas
const frutas: string[] = ['pera', 'lima', 'uva'];

//En primer lugar ts sabe que frutas es un array de string por tanto no brinda los metodos de array(forEach, map, etc.), y despues sabe que cada elemento es un string y podemos utilizar los metodos de string
frutas.forEach((el) => {
	console.log(el.toUpperCase());
});

/* para las funciones el tipado tb es inferido pero es mejor colocarlo: void -> cuando no retorna nada, tb puede retornar Promise*/
function saludar(name: string): string {
	return `Hola ${name.toUpperCase()}`;
}

const saludo = saludar('Roly');
console.log(saludo);

function getNumero(): number {
	return Math.floor(Math.random() * 100);
}
console.log(getNumero().toFixed(2));

function getLista(): Promise<void> {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((json): void => console.table(json));
}
getLista();

//Se puede usar type unions que nos permite ingresar dos o mas tipos
function getEdad(edad: number | string = 17): void {
	console.log(`La edad ingresada es ${edad}`);
}

getEdad(25);
getEdad('37');
getEdad();

export default {};
