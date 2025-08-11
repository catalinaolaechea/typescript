/*1.
 Nos encontramos realizando un programa para un e-commerce de una ferretería. 
a. En una primer instancia les pedimos generar los objetos de los productos de la 
ferretería con TypeScript. 
En este caso solo le vamos a pedir que creen 3 de ellos : martillos, clavos y 
alambre. 
Estos objetos constan de las siguientes propiedades : - marcas ( un array con dos marcas para cada objeto). - cantidad del producto (stock) - 
precio - un booleano que nos indica si tiene descuento o no - en el caso de los clavos, tiene una propiedad que indica los tipos de clavos que 
tiene la ferretería: anillados, cabeza ancha, cabeza plana y de vidriero. 
b. Teniendo en cuenta el punto anterior armar una lista para los productos que 
vende la ferretería utilizando TypeScript. 
c. Armar utilizando TypeScript una funcion que permita agregar los productos de 
la ferretería a la lista 
*/
/*
class Producto {
    constructor(protected marca:string, protected cantidad:number, protected precio:number, protected tieneDescuento:boolean){
    }
    mostrarDetalle():string{
        return `Producto ${this.marca}: cantidad total:${this.cantidad}, precio:${this.precio}. hay descuento? ${this.tieneDescuento ?? "false"}`
    }
    getTotal():number{
        return this.cantidad * this.precio
    }
}

type TipoDeClavo = 'anillado' | 'cabezaAncha' | 'cabezaPlana' | 'vidriero'
class Clavo extends Producto {
    constructor(marca:string, cantidad:number, precio:number, tieneDescuento:boolean, protected tipoDeClavo: TipoDeClavo){
        super(marca, cantidad, precio, tieneDescuento)
    }
    mostrarDetalle():string{
        return `Clavo ${this.marca} tipo ${this.tipoDeClavo}: cantidad total:${this.precio}, precio:${this.cantidad}. tiene descuento? ${this.tieneDescuento ?? "false"}`
    }
}
class Martillo extends Producto{
     constructor(marca:string, cantidad:number, precio:number, tieneDescuento:boolean){
        super(marca, cantidad, precio, tieneDescuento)
    }
    mostrarDetalle():string{
        return `Martillo ${this.marca}: cantidad total:${this.cantidad}, precio:${this.precio}. hay descuento? ${this.tieneDescuento ?? "false"}`
    }
}

class Alambre extends Producto{
    constructor(marca:string, cantidad:number, precio:number, tieneDescuento:boolean){
        super(marca, cantidad, precio, tieneDescuento)
    }
    mostrarDetalle():string{
        return `Alambre ${this.marca}: cantidad total:${this.cantidad}, precio:${this.precio}. hay descuento? ${this.tieneDescuento ? "Sí" : "No"}`
    }
}

type ListaDeProductos = Producto[] 

class Cliente {
    constructor(protected nombre:string, protected listaDeProductos:ListaDeProductos, protected dineroDisponible: number){
    }

    calcularTotalNecesario(): number {
        return this.listaDeProductos.reduce((acum, prod) => acum + prod.getTotal(), 0);
    }
    puedeComprar():boolean{
        return this.calcularTotalNecesario() < this.dineroDisponible
    }

    agregarProducto(producto:Producto):Producto[] {
        this.listaDeProductos.push(producto);
        return this.listaDeProductos;
    }

    mostrarDetalleDeComprar():string{
        return `${this.nombre} tiene a disposición ${this.dineroDisponible} y necesita ${this.calcularTotalNecesario()}. puede comprar? ${this.puedeComprar() ? "Sí" : "No"} `
    }
}

const clavosAltaCalidad = new Clavo ('pimpollo',10,700,false,'anillado')
const martillosTruchos = new Martillo('fulano',4,600,true)

const juliana = new Cliente('juliana',[clavosAltaCalidad, martillosTruchos],15000)

const detallesJuli = juliana.mostrarDetalleDeComprar()

console.log(detallesJuli)





*/


