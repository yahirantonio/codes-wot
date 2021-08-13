import descifrar from "./descifrarcodigo/descifrar";

const getData = () =>{
	const button = document.querySelector("#descifrar");
	let codigo;

	button.addEventListener("click", ()=>{
		codigo = document.querySelector("#codigo").value;
		descifrar(codigo);
	})
}

export default getData;