import Codigos from "./codigos";

const crearCodigos = () =>{

    const a = new Codigos('A');
    a.meterClaves("A1","Damage")
    a.meterClaves("A2","kills")
    a.meterClaves("A3","experience")
    a.meterClaves("A4","Achivement")

    const a4 = new Codigos('A4');
    a4.meterClaves("1","Mastery");
    a4.meterClaves("2","1st class");
    a4.meterClaves("3","2st class");
    a4.meterClaves("4","3st class");
    a4.meterClaves("5","top gun");
    a4.meterClaves("6","high caliber");
    a4.meterClaves("7","confederate");

    const b = new Codigos('B');
    b.meterClaves('B1',"light tank");
    b.meterClaves('B2',"medium tank");
    b.meterClaves('B3',"heavy tank");
    b.meterClaves('B4',"destroyer tank");

    const c = new Codigos('C');
    c.meterClaves('C1',"american");
    c.meterClaves('C2',"german");
    c.meterClaves('C3',"ussr");
    c.meterClaves('C4',"britain");

    const d = new Codigos('D');
    d.meterClaves('D1',"japan");
    d.meterClaves('D2',"chienese");
    d.meterClaves('D3',"french");
    d.meterClaves('D4',"EU");

    const codigosSecretos = [a,a4,b,c,d];

    return codigosSecretos;
}

export default crearCodigos;