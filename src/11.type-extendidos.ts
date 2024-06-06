type Persona = {
	id: number;
	nombre: string;
};

//Se puede extender de un tipo ->> interface
interface Empleado extends Persona {
	sueldo: number;
}

//Esta la sintaxis para extender entre 2 typos
type Estudiante = Persona & {
	carrera: string;
};

const estudiante: Estudiante = {
	id: 1,
	nombre: 'Jimena',
	carrera: 'Tintes y Peinados',
};

console.log(`${estudiante.nombre} estudia ${estudiante.carrera}`);
