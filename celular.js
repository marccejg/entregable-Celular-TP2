"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
var Celular = /** @class */ (function () {
    function Celular(pMarca, pModelo, pSistemaOp, pMemoriaRAM, pAlmacenamiento, pPrendido) {
        if (pMemoriaRAM === void 0) { pMemoriaRAM = 8; }
        if (pAlmacenamiento === void 0) { pAlmacenamiento = 64; }
        if (pPrendido === void 0) { pPrendido = false; }
        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOp = pSistemaOp;
        this.memoriaRAM = pMemoriaRAM;
        this.almacenamiento = pAlmacenamiento;
        this.prendido = pPrendido;
    }
    Celular.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Celular.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Celular.prototype.setSistemaOp = function (pSistemaOp) {
        this.sistemaOp = pSistemaOp;
    };
    Celular.prototype.getMemoriaRAM = function () {
        return this.memoriaRAM;
    };
    Celular.prototype.getAlmacenamiento = function () {
        return this.almacenamiento;
    };
    Celular.prototype.getPrendido = function () {
        return this.prendido;
    };
    Celular.prototype.prenderApagar = function () {
        if (this.prendido == false) {
            console.log("El celular se está iniciando");
        }
        else {
            console.log("El celular se está apagando");
        }
    };
    Celular.prototype.mostrarInfo = function () {
        console.log("Marca: ".concat(this.marca));
        console.log("Modelo: ".concat(this.modelo));
        console.log("Sistema Operativo: ".concat(this.sistemaOp));
        console.log("Memoria RAM: ".concat(this.memoriaRAM, "GB"));
        console.log("Almacenamiento: ".concat(this.almacenamiento, "GB"));
        console.log("Prendido: ".concat(this.prendido ? "Sí" : "No"));
    };
    return Celular;
}());
exports.Celular = Celular;
