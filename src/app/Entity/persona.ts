export class Persona {
   
     id?:number;     
     nombre:String 
     apellido: String ;
     titulo:string;
     descripcion: string;
     email: String;
     pasword:String;
     telefono:string;
     foto:string;

     constructor (nombre:String,apellido: String,titulo:string, descripcion:string, email: String, pasword:String, telefono:string,foto:string){
        //this.id=id     
        this.nombre=nombre;
        this.apellido=apellido ;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.email=email;
        this.pasword=pasword;
        this.telefono=telefono;
        this.foto=foto;

     }

}
