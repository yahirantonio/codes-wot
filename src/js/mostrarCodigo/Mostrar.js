export default class Mostrar{

	codigo;
	p;

	constructor(array){
		this.codigo = array;
	}

	mostrar(){
		console.log(this.codigo);
	}

	transformarArray(){
		this.codigo = this.codigo.toString();
		this.codigo = this.codigo.replaceAll(',',' ')
		console.log(this.codigo);
	}

	crearElementoP(){
		this.p = document.createElement('p')
	}

	ponerCodigo(){
		const article = document.querySelector("#article");
		this.p.innerHTML = this.codigo;
		article.appendChild(this.p);
	}
}