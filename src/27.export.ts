export type ID = string | number;
export interface Cursos {
	id: ID;
	nombre: string;
}

export interface Libro {
	titulo: string;
	autor: string;
	numPaginas?: number;
	cursos: Cursos[];
}

export const nombre: string = 'Valentina';

/* export default {
  Cursos,
  Libro,
  nombre
} */ //Esto da ERROR no se exporta asi
