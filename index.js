"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear;
var celular_1 = require("./celular");
//instanacias
var primerCelular = new celular_1.Celular("Samnsung", "A20", "Android", 8, 64, true);
var segundoCelular = new celular_1.Celular("Motorola", "E2", "Android", undefined, undefined, undefined);
//primerCelular.setMarca("IPhone");
//primerCelular.setSistemaOp("IOS")
console.log(primerCelular.mostrarInfo());
console.log(segundoCelular.mostrarInfo());
console.log(segundoCelular.prenderApagar());
