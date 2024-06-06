//Tipado básico
let teacherName: string = 'Roly';
let tacherAge: number = 37;
let goodTeacher: boolean = true;

//Array -> para array hay dos sintaxis
let teacherCourses: string[] = ['react', 'vue', 'svelte'];
let courses: Array<string> = ['vue', 'nuxt', 'astro'];

//Any -> permite cualquier tipo
const unTypedArray: any[] = [1, 'Carlos', true];
const unTypedArray2: Array<any> = [10, 'Juan', false];

//Tupla -> Las tuplas en TypeScript son una estructura de datos que permite agrupar diferentes tipos de datos en una sola variable. Es como un array, pero con la diferencia de que los tipos de datos que puede contener son fijos y en un orden específico.
const arrayPosition: [string, number, boolean] = ['Mena', 17, true];

//Object -> Es como un tipado básico dentro de un objeto, no es muy utilizado ya que es mejor usar type aliases o interfaces

let teacherInfo: {
	name: string;
	goodTeacher: boolean;
	age: number;
	courses: string[];
} = {
	name: 'Roly',
	goodTeacher: true,
	age: 37,
	courses: ['vue', 'node', 'nest'],
};
//Lo bueno es que ya tenemos autocompletado de vscode y si llamamos a name, este ya no muestra todos los metodos de string, si llamamos a age nos muestra todos los metodos de number
teacherInfo.name.toUpperCase();
teacherInfo.age.toFixed(2);

//Cuando tsc compila el codigo de cada archivo lo lleva a un scope global, por tanto si declaramos variables con el mismo nombre en diferentes archivos nos va a salir un error por ende solo tenemos que colocar export default al final de cada archivo para delimitar que son modulos separados
export default {};
