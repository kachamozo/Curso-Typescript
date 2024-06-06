interface Animal {
	nombre: string;
	comer(): void;
}
//=========IMPLEMENTS==========//
//Aqui implementamos la interfaz Animal que nos dice que si o si tiene que tener un nombre:string y un metodo comer(){}
class Perro implements Animal {
	nombre: string;
	comer(): void {}
	//El constructor es el encargado de asignarle valores a mis propiedades
	constructor(nombre: string) {
		this.nombre = nombre;
	}
	//Tambien podemos agregar nuevos metodos y propiedades
	saltar() {}
	raza: string = 'Pastor Aleman';
}
//creamos una instancia de perro
const perro = new Perro('Rambo');
console.log(`Mi perro se llama ${perro.nombre} y es de raza ${perro.raza}`);

export default {};
