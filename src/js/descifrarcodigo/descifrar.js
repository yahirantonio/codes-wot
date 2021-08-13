import crearCodigos from "../Codigos/creacionCodigos";
import Mostrar from "../mostrarCodigo/Mostrar";

let traducido = [];

const descifrar = (codigo = "no envio nada") =>{
    let diccionario = crearCodigos();
    let expresion = /[^: ]+/g;
    let traducir = codigo.match(expresion);
    

    traducir.forEach(value =>{
        evaluar(value,diccionario)
    })

    console.log(diccionario)
    console.log(traducir);
    console.log(traducido);

    const mostrar = new Mostrar(traducido);
    mostrar.mostrar()
    mostrar.transformarArray();
    mostrar.crearElementoP()
    mostrar.ponerCodigo();

    traducido = [];
}

const evaluar = (parametro, diccionario) =>{
    let c;
    diccionario.some((value,index) =>{
        c = parametro.indexOf(value.tipo);
        if(c !== -1){
            console.log("entro al tipo");
            compararClaves(value.claves, parametro)
        }

        if(!isNaN(parametro)){
            if(traducido[0] === "Achivement"){
                compararClaves(diccionario[1].claves, parametro)
            } else {
                traducido.push(parametro);
            }

            return true;
        }
    })
}

const compararClaves = (claves, traducir) =>{
    
    claves.some((value,index) =>{
        if(value[0] === traducir){
            console.log("entro al valor");
            traducido.push(value[1]);
            return true;
        }
    })
}

export default descifrar;

//A ([abcd][0-9]):?(([0-7]:?)+)?([0-9]+)?
// codigo = codigo.match(/([abcd0-9]+)/gi)
//b
//c
//D