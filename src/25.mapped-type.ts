//mapped-type sirve para iterar sobre las propiedades de un objeto(name) no sobre su valor(string)
type User = {
	name: string;
	age?: number;
	readonly country: string;
};

//Iteramos el tipo que le pasamos y lo convertimos todo a boolean
type MakeABoolean<T> = {
	[k in keyof T]: boolean;
};

type UserBoolean = MakeABoolean<User>;
/* type UserBoolean = {
    name: boolean;
    age?: boolean | undefined;
    readonly country: boolean;
} */

//TIPOS CON 2 GENERICOS
type MyPick<T, K extends keyof T> = {
	[P in K]: T[P];
};
type OnlyUsername = MyPick<User, 'name'>;

export default {};
