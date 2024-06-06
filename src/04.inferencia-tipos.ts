//Si no le pasamos el tipo, typescript automaticamente infiere el tipo y funcunciona de la misma manera ya no se puede volver a asignar otro tipo daoto a la variable
let nombre = 'Jimena';
let edad = 35;
let esBonita = true;

//En este caso la variable toma any y puede ser reasignada con otro tipo
let pais;
pais = 'Bolivia';
pais = true;

//Tambien existe un caso especial con los array(pasar el mouse por encima de la variable) donde infiere que puede ser number | string | boolean !== diferente a una tupla por que puede ser reasignada con solo valores de number o string o combinados y en distintas posiciones
let array1 = [1, 'node', true];
array1 = ['Roly', 'Jimena'];
array1 = [1, 2, 3];
array1 = [true, 2];

//Tampoco puede inferir propiedades opcionales si o si tienen que ser declaradas explicitamente ?
let persona = {
	nombre: 'Roly',
	edad: 37,
	pais: 'Bolivia',
};

export default {};
