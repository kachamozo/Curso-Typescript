//Propiedades Opcionales -> Cuando creas un tipo, Typescript te va a exigir que el objeto que usas tenga todas las propiedades indicadas en el tipo. La ventaja de las propiedades opcionales es que puedes tener propiedades que no siempre sean requeridas, y esto se consigue con el símbolo de interrogación(pasar el raton por encima), es decir:
let user: {
	name: string;
	address?: string;
	age: number;
} = {
	name: 'Jimena',
	age: 35,
	address: 'Manuel Duran',
};

//¿Y qué pasa si en lugar de crear parámetros opcionales hacemos esto? ¿no sería lo mismo?
let user2: {
	name: string;
	surname: string;
	address: string | undefined;
	age: number;
};
//La realidad es que NO. Haciendo esto, Typescript te va a decir que tienes que crear el objeto con la propiedad address ya sea string o undefined, es decir, tendrías que crear el objeto así, algo muy extraño:
user2 = {
	name: 'Jhon',
	surname: 'Doe',
	age: 28,
	address: undefined,
};

//cuando un propiedad es opcional tenemos que validar que la propiedad exista para llamar a sus metodos y se puede hacer de 2 maneras:
const converted = user.address?.toUpperCase();
if (user.address) {
	const converted = user.address.toUpperCase();
	console.log(converted);
}

//Cuando tsc compila el codigo de cada archivo lo lleva a un scope global, por tanto si declaramos variables con el mismo nombre en diferentes archivos nos va a salir un error por ende solo tenemos que colocar export default al final de cada archivo para delimitar que son modulos separados
export default {};
