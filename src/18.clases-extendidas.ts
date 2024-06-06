//clase padre
class Info {
	public zona: string = 'Alto Mesa Verde';
	protected ciudad: string = 'Sucre';
	private pais: string = 'Bolivia';
	//El private solo puede ser accedida dentro de su propia clase
	lugarDeNacimiento() {
		return `Yo naci en ${this.pais}`;
	}
}

class Vendedor extends Info {
	// atributos son estados de las variables
	/* 	id: number;
	nombre: string;
	division: string; */

	//metodos -> existe una manera mas corta de asignar valores y es colocarle (public, private, protected) tambien funicona con metodos
	//readonly -> solo lectura, no se puede volver a asignar
	constructor(
		public readonly id: number,
		private nombre: string,
		protected division: string
	) {
		//El metodo super es importante colocarlos antes de TODO solo cuando utilizamos extends para traernos todo de la clase padre
		super();
		/* this.id = id;
		this.nombre = nombre;
		this.division = division; */
	}

	//Public -> se puede acceder desde cualquier parte del codigo
	//Protected -> solo se puede acceder desde la clase que lo extiende Herencia
	//Private -> solo puede ser accedido dentro de la misma clase
	verinfo(): void {
		console.log(
			`Mi nombre es ${this.nombre} ${this.lugarDeNacimiento()}-${this.ciudad}`
		);
	}
}

const vendedor = new Vendedor(1, 'Roly', 'Ventas');
//Desde aqui solo se puede acceder a los atributos y metodos publicos
vendedor.verinfo();
vendedor.id;

export default {};
