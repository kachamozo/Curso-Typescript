//type assertion -> cambiar el tipo de una variable. Es funcional cuando no sabemos lo que nos llega en algunas API

let nombre: any = 'Roly';

//existen dos notaciones
let nombreStr = <string>nombre;
let nombreStr2 = nombre as string;

// eje. si pasamos el cursor por miCanvas, nos dice que es HTMLElement | null no sabe que es de tipo HTMLCanvasElement
// entonces si estamos seguros nosotros podemos tiparlo ya sea uno u otro
const miCanvas = document.getElementById('main');
const miCanvas1 = <HTMLCanvasElement>document.getElementById('main');
const miCanvas2 = document.getElementById('main') as null;

//--------------CHAT GPT -----------------
/* "type assertion" (o afirmación de tipo) es una manera de decirle al compilador de TypeScript que confíes en que cierto valor es de un tipo específico, aunque el compilador no pueda deducirlo por sí mismo.

Esto puede ser útil en situaciones donde el tipo de un valor es más específico de lo que TypeScript puede inferir de manera automática. Por ejemplo, imagina que estás trabajando con un tipo de dato any, que es bastante genérico y puede contener cualquier tipo de valor. Si estás seguro de que ese valor es de un tipo más específico, puedes usar una type assertion para indicárselo al compilador.

Hay dos formas de hacer una type assertion en TypeScript:

Sintaxis Angular: Utilizando la palabra clave as */

let valor: any = 'esto es una cadena';
let longitud: number = (valor as string).length;

/* Aquí, estamos diciéndole al compilador que tratemos valor como una cadena, aunque originalmente es de tipo any.

Sintaxis de Corchetes: Utilizando corchetes angulares (<>) */

let valor1: any = 'esto es una cadena';
let longitud2: number = (<string>valor).length;

/* Es importante tener en cuenta que las type assertions no realizan ninguna conversión o comprobación en tiempo de ejecución, simplemente le dicen al compilador cómo tratar un valor en tiempo de compilación. Por lo tanto, si haces una type assertion y te equivocas en cuanto al tipo real del valor, podrías tener errores en tiempo de ejecución. Por eso, es importante usarlas con precaución y asegurarte de que estás seguro del tipo de dato que estás afirmando. */

export default {};
