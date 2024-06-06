//Se puede crear una interface padre
interface Persona {
	id: number;
	nombre: string;
}

//OJO->> solo las INTERFACES tienen la propiedad EXTENDS...!!!! Los tipos NO..!!!
//Extendemos de Persona y le agregamos sueldo , asi se reutiliza codigo y tenemos tres atributos(id,nombre,sueldo)
interface Empleado extends Persona {
	sueldo: number;
}

//Se puede combinar tipos con interfaces, pero solo las interfaces tienen el extends
type Comprar = (moneda: number) => void;
//Tb podemos agregar metodos y tipar los parametros y lo que retorna la funcion, puede ser directo o creamos un type alias
interface Cliente extends Persona {
	comprar: Comprar;
}

//Aqui creamos un objeto de tipo Empleado
const empleado: Empleado = {
	id: 1,
	nombre: 'Javier',
	sueldo: 1250,
};

//Aqui creamos un objeto de tipo cliente
const cliente: Cliente = {
	id: 1,
	nombre: 'Ana',
	comprar: (dinero) => console.log(`se gasto ${dinero} pesos`),
};
//Lo mejor es que vscode no muestra las propiedades de dicho objeto para evitar equivocarnos al escribir o llamar funciones
function cajaChica(cliente: Cliente) {
	cliente.comprar(100);
}
//llamamos a la funcion
cajaChica(cliente);

export default {};
