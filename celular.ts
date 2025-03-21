export class Celular {

    private marca: string;
    private modelo: string;
    private sistemaOp: string;
    private memoriaRAM: number;
    private almacenamiento: number;
    private prendido: boolean;

    constructor(pMarca: string,pModelo: string, pSistemaOp: string,pMemoriaRAM?:number,pAlmacenamiento?: number, pPrendido?: boolean) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOp = pSistemaOp;
        this.memoriaRAM = pMemoriaRAM ?? 8;
        this.almacenamiento = pAlmacenamiento ?? 64;
        this.prendido = pPrendido ?? false;
    }
    //

    public setMarca(pMarca: string): void {
        this.marca = pMarca;
    };
    public getMarca(): string {
        return this.marca;
    };

    //
    public setModelo(pModelo: string): void {
        this.modelo = pModelo;
    };
    public getModelo(): string {
        return this.modelo;
    };

    //
    public setSistemaOp(pSistemaOp: string): void {
        this.sistemaOp = pSistemaOp;
    };
    public getSistemaOp(): string {
        return this.sistemaOp;
    };

//
    public setMemoriaRAM(pMemoriaRAM: string): void {
        this.marca = pMemoriaRAM;
    };
    public getMemoriaRAM(): number {
        return this.memoriaRAM;
    };


    public setAlmacenamiento(pAlmacenamiento: string): void {
        this.marca = pAlmacenamiento;
    };
    public getAlmacenamiento(): number {
        return this.almacenamiento;
    };

    //
    public setPrendido(pPrendido: string): void {
        this.marca = pPrendido;
    };

    public getPrendido(): boolean {
        return this.prendido;
    };
//

    public prenderApagar(): string {
        let resultado:string=""
        if (this.prendido == false) {
        resultado ="El celular se está iniciando"
        } else {
          resultado = "El celular se está apagando";
        };
     return resultado;   
    };

    public mostrarInfo(): void {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Sistema Operativo: ${this.sistemaOp}`);
        console.log(`Memoria RAM: ${this.memoriaRAM}GB`);
        console.log(`Almacenamiento: ${this.almacenamiento}GB`);
        console.log(`Prendido: ${this.prendido ? "Sí" : "No"}`);
    };
};