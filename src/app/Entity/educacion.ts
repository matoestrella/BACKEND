export class Educacion {
    id?:number;    
    institucion:String;
    nivel:String;
    titulo:String;
    periodo:String;
    descripcion:String;

    constructor (institucion: String ,  nivel:String,titulo: String, periodo:String,  descripcion: String) {
        this.institucion = institucion;
        this.nivel = nivel;
        this.titulo = titulo;
        this.periodo = periodo;
        this.descripcion = descripcion;
    }

}
