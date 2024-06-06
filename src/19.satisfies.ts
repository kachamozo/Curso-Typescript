type ID = string | number;
interface Cursos {
	id: ID;
	nombre: string;
}

interface Libro {
	titulo: string;
	autor: string;
	numPaginas?: number;
	cursos: Cursos[] | string[];
}

//La clave esta aqui en ves de colocar const libro:Libro al final le pasamos satisfies Libro.
//Si nuestro objeto satisface a nuestra interfaz Libro -> Ts infiere los tipos de datos en este caso un array de Cursos
//Ahora si cursos:['Roly', 'Jimena'] entonces TS infiere que es un array de string
//Si le preguntamos a chatgpt nos da otros ejemplos
const libro: Libro = {
	titulo: '"Dominando TypeScript: Del Fundamento a la Maestría"',
	autor: 'Roly Ochoa',
	numPaginas: 700,
	cursos: [
		{ id: 1, nombre: 'React' },
		{ id: '2', nombre: 'Vue' },
	],
};

//Si const libro:Libro vscode no sabe si es array de cursos o array de string y nos marca un error aunque sea un array de cursos que tienen id y nombre
// libro.cursos.forEach((curso) => console.log(curso.id));

//Ahora si quitamos el tipado para libro2 funciona ok
const libro2 = {
	titulo: '"Dominando TypeScript: Del Fundamento a la Maestría"',
	autor: 'Roly Ochoa',
	numPaginas: 700,
	cursos: [
		{ id: 1, nombre: 'React' },
		{ id: '2', nombre: 'Vue' },
	],
} satisfies Libro;
//En este caso vscode sabe que cursos es un array de cursos que tienen id y nombre
libro2.cursos.forEach((curso) => console.log(curso.id));

export default {};
