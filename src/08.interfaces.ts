/* Una interface es un contrato para validar tipos, 
-tb puede tener atributos y métodos, tb pueden ser opcionales ?
*/
interface Libro {
	id: number;
	titulo: string;
	autor: string;
	coAutor?: string;
	leer?: (id: number) => void;
}
//Se puede validar objetos
const libro: Libro = {
	id: 1,
	titulo: 'Dragon Ball Z',
	autor: 'Akira Toriyama',
};

//Se puede validar array de objetos
const arrayLibros: Libro[] = [];

//se puede validar retorno de funciones ya sea Libro o Libro[]
function getLibro(): Libro {
	return { id: 1, titulo: 'La pluma de Miguel', autor: 'Ana' };
}
console.log(getLibro());

/* La diferencia fundamental entre JSON (JavaScript Object Notation) y un objeto JavaScript radica en su propósito y capacidad:

    Objeto JavaScript: Es una estructura de datos en el lenguaje de programación JavaScript que puede almacenar valores y funciones. Los objetos JavaScript pueden contener cualquier tipo de datos, incluyendo números, cadenas, booleanos, arrays, otras funciones, y más. Son dinámicos y pueden cambiar durante la ejecución del programa. Además, pueden tener propiedades que son funciones, actuando como métodos del objeto.

    JSON: Es un formato de intercambio de datos ligero y fácil de leer y escribir para humanos, y fácil de analizar y generar para máquinas. JSON es un subconjunto de los objetos JavaScript, pero con restricciones más estrictas. Solo admite un conjunto limitado de tipos de datos: números, cadenas, booleanos, arrays, objetos y null. No puede contener funciones ni comentarios. Todas las claves y cadenas de texto en JSON deben estar entre comillas dobles.
 */
export default {};
