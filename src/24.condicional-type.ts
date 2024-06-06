//Sirve para genericos por que no sabemos si T extiende de alguna interface o type y nuestra funcion puede devolver un tipo u otro
function getUser<T>(): T extends string
	? { id: number; name: string }
	: number {
	throw '';
}

const user = getUser<string>();
const user2 = getUser<boolean>();

//NOTA.- EN EL VIDEO EXPLICA MAS COSAS UN POCO REBUSCADAS Y MAS DIFICIL DE ENTENDER

export default {};
