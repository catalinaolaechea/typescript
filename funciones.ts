//POO
/* 1.
 Crear un programa para una oficina de recursos humanos. 
Este programa tiene que permitir a las personas de recursos humanos ingresar la 
cantidad de días que fueron a trabajar los empleados, los feriados que se 
trabajaron , si alguno se tomo licencia y si presentaron certificados. 
Esta información se debe mostrar en el navegador donde por cada empleado se 
muestre una lista con esta información. 
A esto , agregarle la posibilidad de que los empleados puedan acceder a la 
información cargada, pero solamente puedan mandar un mensaje en caso que 
algo no coincida con lo que tienen, pero no puedan modificar la información 
cargada por la parte de recursos humanos. 
*/
class oficinaRRHH{
    nombre: string;
    diasTrabajados: number;
    feriadosTrabajados: number;
    licencia: number;
    certificado?: boolean;
    constructor(empleado:string, cantidad1: number, cantidad2:number, ausencia: number, constancia?: boolean ){
        this.nombre = empleado,
        this.diasTrabajados= cantidad1,
        this.feriadosTrabajados = cantidad2,
        this.licencia= ausencia,
        this.certificado= constancia;
    }
    navInfo (){
        if(this.certificado === undefined){
            return `empledo: ${this.nombre}\ncantidad de días trabajados: ${this.diasTrabajados}\nausencias:${this.feriadosTrabajados}\n `
        }
        else{
            return `empledo: ${this.nombre}\ncantidad de días trabajados: ${this.diasTrabajados}\nausencias:${this.feriadosTrabajados}\njustificado:${this.certificado}  `
        }
        
    }
} 
const empleado1 = new oficinaRRHH ('carlos gardel', 4, 1, 0);
const empleado2 = new oficinaRRHH ('Maria Aguirre', 7, 1, 0);

let empleados: oficinaRRHH[] = [];

empleados.push(empleado1);
empleados.push(empleado2);

//empleado
class empleado{
    usuario: string;
    comentario?:string;
    constructor(nombre:string, comentario?:string){
        this.usuario=nombre,
        this.comentario=comentario
    }
    verInformacion(){
        return empleados.forEach(empl => {console.log(empl.navInfo())})
    }
    agregarComentarios(){
        return `comentarios de ${this.usuario}: ${this.comentario} `
    }

}
