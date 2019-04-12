export class DateTask {

    private fecha: string;
    private fechaHora: string;
    private fechaString: string;
    private zonaHoraria: string;

    constructor(fecha: string, fechaHora: string, fechaString: string, zonaHoraria: string) {

        this.fecha = fecha;
        this.fechaHora = fechaHora;
        this.fechaString = fechaString;
        this.zonaHoraria = zonaHoraria;

    }
}
