export default class Codigos{
    tipo = '';
    claves = [];
    
    constructor(tipo){
        this.tipo = tipo;
    }

    meterClaves(clave, valor){
        let seccion = [clave,valor];
        this.claves.push(seccion);
    }
};