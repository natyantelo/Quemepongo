export class ErrorJson {

    public ok: boolean;
    public estado: number;
    public mensaje: string;

    constructor(estado: number, mensaje: string) {
        this.ok = false;
        this.estado = estado;
        this.mensaje = mensaje;
    }
}