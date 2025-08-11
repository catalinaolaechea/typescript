
// abstract permite que clases que solo sirven para generar jerarquías pero no existen
abstract class Vehiculo {
    constructor (protected marca:string,protected modelo:string,protected anio:number,protected color?:string){

    }
    protected abstract descripcion():string
}

class Auto extends Vehiculo{
    constructor(
        marca:string, 
        modelo:string, 
        anio:number, 
        protected cantidadPuertas:number,
        color?:string, 
        
    ){
        super(marca, modelo, anio, color);
    }
    descripcion(){
        return `Auto: ${this.marca} ${this.modelo} (${this.anio}) - ${this.cantidadPuertas} - ${this.color ?? "No especificado"} `
    }
}

class Moto extends Vehiculo{
    constructor(
        marca:string, 
        modelo:string, 
        anio:number, 
        protected cilindrada: number,
        color?:string, 
    ){
        super(marca, modelo, anio, color);
    }
    //sobreescritura:
    descripcion(): string {
        return `Moto: ${this.marca} ${this.modelo} (${this.anio}) - ${this.cilindrada}cc - ${this.color ?? "No especificado"} `
    }
}

//no llamar a descripcion desde constructor para evitar que se sobre escriba
const unAuto = new Auto('Honda', 'Civic', 2022, 4, 'gris' );
const otroAuto = new Auto('Honda', 'Civic', 2022 , 4 );
const moto = new Moto('Yamaha', 'MT-07', 2023, 125);
const res1 = unAuto.descripcion();
const res2 = otroAuto.descripcion();
const res3 = moto.descripcion();
console.log(res1);
console.log(res2);
console.log(res3);