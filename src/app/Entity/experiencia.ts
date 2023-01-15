export class Experiencia {

    id?:number;    
    empresa:String;
    periodo:String;
    descripcion:String;

    constructor (empresa: String ,periodo:String,  descripcion: String) {
        this.empresa = empresa;
        this.periodo = periodo;
        this.descripcion = descripcion;
    }

}
