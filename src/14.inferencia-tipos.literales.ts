//type literals
type methodRequest = 'GET' | 'POST';

//funcion
function request(url: string, method: methodRequest): void {
	console.log(`La url:${url}, y el metodo:${method}`);
}

//data
const data = {
	url: 'miWeb',
	method: 'GET' as const,
};

//Ts infiere los datos (url: string y method: string) pero necesitamos que SOLO method sea un type-literal -> procedemos a convertirlo con 'as const'
//En caso de que necesitemos que todo el objeto sea literl-type aplicamos "as const" despues de las llaves -> { } as const
request(data.url, data.method);

export default {};
