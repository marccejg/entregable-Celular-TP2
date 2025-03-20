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

    public setMarca(pMarca: string): void {
        this.marca = pMarca;
    }

    public setModelo(pModelo: string): void {
        this.modelo = pModelo;
    }

    public setSistemaOp(pSistemaOp: string): void {
        this.sistemaOp = pSistemaOp;
    }

    public getMemoriaRAM(): number {
        return this.memoriaRAM;
    }

    public getAlmacenamiento(): number {
        return this.almacenamiento;
    }

    public getPrendido(): boolean {
        return this.prendido;
    }

    public prenderApagar(): string {
        let resultado:string=""
        if (this.prendido == false) {
           let resultado:string ="El celular se está iniciando"
        } else {
          resultado = "El celular se está apagando";
        }
     return resultado;   
    }

    public mostrarInfo(): void {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Sistema Operativo: ${this.sistemaOp}`);
        console.log(`Memoria RAM: ${this.memoriaRAM}GB`);
        console.log(`Almacenamiento: ${this.almacenamiento}GB`);
        console.log(`Prendido: ${this.prendido ? "Sí" : "No"}`);
    }
}