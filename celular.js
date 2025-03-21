"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
var Celular = /** @class */ (function () {
    function Celular(pMarca, pModelo, pSistemaOp, pMemoriaRAM, pAlmacenamiento, pPrendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOp = pSistemaOp;
        this.memoriaRAM = pMemoriaRAM !== null && pMemoriaRAM !== void 0 ? pMemoriaRAM : 8;
        this.almacenamiento = pAlmacenamiento !== null && pAlmacenamiento !== void 0 ? pAlmacenamiento : 64;
        this.prendido = pPrendido !== null && pPrendido !== void 0 ? pPrendido : false;
    }
    //
    Celular.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    ;
    Celular.prototype.getMarca = function () {
        return this.marca;
    };
    ;
    //
    Celular.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    ;
    Celular.prototype.getModelo = function () {
        return this.modelo;
    };
    ;
    //
    Celular.prototype.setSistemaOp = function (pSistemaOp) {
        this.sistemaOp = pSistemaOp;
    };
    ;
    Celular.prototype.getSistemaOp = function () {
        return this.sistemaOp;
    };
    ;
    //
    Celular.prototype.setMemoriaRAM = function (pMemoriaRAM) {
        this.marca = pMemoriaRAM;
    };
    ;
    Celular.prototype.getMemoriaRAM = function () {
        return this.memoriaRAM;
    };
    ;
    Celular.prototype.setAlmacenamiento = function (pAlmacenamiento) {
        this.marca = pAlmacenamiento;
    };
    ;
    Celular.prototype.getAlmacenamiento = function () {
        return this.almacenamiento;
    };
    ;
    //
    Celular.prototype.setPrendido = function (pPrendido) {
        this.marca = pPrendido;
    };
    ;
    Celular.prototype.getPrendido = function () {
        return this.prendido;
    };
    ;
    //
    Celular.prototype.prenderApagar = function () {
        var resultado = "";
        if (this.prendido == false) {
            var resultado_1 = "El celular se está iniciando";
        }
        else {
            resultado = "El celular se está apagando";
        }
        ;
        return resultado;
    };
    ;
    Celular.prototype.mostrarInfo = function () {
        console.log("Marca: ".concat(this.marca));
        console.log("Modelo: ".concat(this.modelo));
        console.log("Sistema Operativo: ".concat(this.sistemaOp));
        console.log("Memoria RAM: ".concat(this.memoriaRAM, "GB"));
        console.log("Almacenamiento: ".concat(this.almacenamiento, "GB"));
        console.log("Prendido: ".concat(this.prendido ? "Sí" : "No"));
    };
    ;
    return Celular;
}());
exports.Celular = Celular;
;
