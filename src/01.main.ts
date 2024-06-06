function sumarNumeros(n1: number, n2: number): number {
	return n1 + n2;
}

let num1 = prompt('ingrese el primer valor');
let num2 = prompt('ingrese el segundo valor');

if (num1 && num2) {
	alert(sumarNumeros(parseInt(num1), parseInt(num2)));
}

//Cuando tsc compila el codigo de cada archivo lo lleva a un scope global, por tanto si declaramos variables con el mismo nombre en diferentes archivos nos va a salir un error por ende solo tenemos que colocar export default al final de cada archivo para delimitar que son modulos separados
export default {};
