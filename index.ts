console.clear;
import { Celular } from "./celular";
//instanacias
let primerCelular = new Celular("Samnsung","A20","Android",8,64,true);
let segundoCelular = new Celular("Motorola","E2","Android",undefined,undefined,undefined);

//primerCelular.setMarca("IPhone");
//primerCelular.setSistemaOp("IOS")

console.log(primerCelular.mostrarInfo());
console.log(segundoCelular.mostrarInfo());
console.log(segundoCelular.prenderApagar())