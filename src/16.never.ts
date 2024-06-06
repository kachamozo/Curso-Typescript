//El switch ya esta cubierto con los doferentes casos posibles por tanto en el default a un a funcion de tipo never y si alguien aumenta mas opciones al tipo Roly('root') el rolInvalido no dara error.
//Estoo sirve par controlar que nadie cambie el codigo
type Rol = 'admin' | 'user' | 'premiun';

function rolInvalido(rol: never) {
	throw new Error('Error');
}

function getAcceso(rol: Rol) {
	switch (rol) {
		case 'admin':
			break;
		case 'user':
			break;
		case 'premiun':
			break;
		default:
			rolInvalido(rol);
			break;
	}
}

//No confundir con void: Aunque void también puede indicar que una función no devuelve nada útil, never se usa para indicar que una función nunca regresa el control al llamador, lo cual es diferente.

/* Ejemplo de Uso

    Funciones que siempre lanzan una excepción: Si tienes una función que siempre lanza una excepción sin llegar a su punto final, puedes usar never para indicar esto.
 */
function throwError(errorMsg: string): never {
	throw new Error(errorMsg);
}
/* Bucles infinitos: Para funciones que entran en un bucle infinito y nunca terminan, también puedes usar never. */
function keepProcessing(): never {
	while (true) {
		console.log('I always does something and never ends.');
	}
}

export default {};
