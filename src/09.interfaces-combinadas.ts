//Podemos combinar interfaces con otras interfaces y tb con type alias
type ID = string | number;
interface Cursos {
	id: ID;
	nombre: string;
}

//Generalmente las interfaces se usan para objetos
interface Libro {
	titulo: string;
	autor: string;
	numPaginas?: number;
	cursos: Cursos[];
}
//Se puede validar objetos
const libro: Libro = {
	titulo: '"Dominando TypeScript: Del Fundamento a la Maestría"',
	autor: 'Roly Ochoa',
	numPaginas: 700,
	cursos: [
		{ id: 1, nombre: 'React' },
		{ id: '2', nombre: 'Vue' },
	],
};

function imprimirCursos(libro: Libro) {
	console.log(
		`El libro ${libro.titulo} que fue escrita por ${libro.autor}, tiene los siguientes cursos:`
	);
	libro.cursos.forEach((el, i) => {
		console.log(`Capítulo ${i + 1} -> ${el.nombre}`);
	});
}
imprimirCursos(libro);

export default {};
