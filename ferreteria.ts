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
interface nombreProductos{
    nombre:string;
    stock:number;
    tipo?:string;
}

class productosGenerales{
    productos:nombreProductos[];
    marca:string;
    stock:number;
    precio:number;
    descuento:boolean;

    constructor(
        marcaProducto:string, 
        stockProducto:number, 
        precioProducto:number, 
        descuentoProducto:boolean
    ) {
        this.productos= [];
        this.marca = marcaProducto;
        this.stock = stockProducto;
        this.precio= precioProducto
        this.descuento= descuentoProducto
    }

    agregarNuevoProducto(nombre:string, cantidad:number):void{
        if(nombre === "martillo" || nombre === "alambre"){
            let productoExiste = this.productos.find((producto) => producto.nombre === nombre );
            //si el producto existe
            if( productoExiste){
                productoExiste.stock += cantidad; 
                console.log(`se agregó stock a "${nombre}".`)
            }
            //si el producto no existe
            else{
                this.productos.push({nombre, stock:cantidad })
                console.log(`el producto "${nombre}" se agregó con exito a la base de datos.`)
            }
        }
        else if (nombre === "clavo"){
            console.log("por favor cargar los clavos en la sección de clavos")
        }
        else{
            console.log("no estan admitidos esos productos en la ferretería")
        }
    }

    listarProductos():void{
        console.log("lista de stock de productos de la ferretería: ")
        this.productos.forEach((producto)=>console.log(`${producto.nombre}: ${producto.stock}`))
    }
}

class clavo extends productosGenerales{
    tipo: string;
    constructor(
        marcaProducto:string, 
        stockProducto:number, 
        precioProducto:number, 
        descuentoProducto:boolean, 
        tipoClavo:string
    ){
        super(marcaProducto, stockProducto, precioProducto, descuentoProducto);
        this.tipo = tipoClavo; //en caso de que se quiera elimina o agregar una clase nueva de clavos 
    }
    agregarProducto(nombre:string, tipo:string, cantidad:number):void {
        if(nombre==="clavo"){
            let productoExiste = this.productos.find((producto) => producto.nombre === nombre && producto.tipo === tipo );
            //si el producto existe
            if( productoExiste ){
                productoExiste.stock += cantidad; 
                console.log(`se agregó stock al tipo "${tipo}" de "${nombre}".`)
            }
            //si el producto no existe
            else{
                this.productos.push({nombre, tipo, stock:cantidad })
                console.log(`el producto "${nombre}" se agregó con exito a la base de datos.`)
            }
        }
        else if (nombre === "martillo" || nombre === "alambre"){
            console.log("por favor cargar  en la sección de productos generales")
        }
        else{
            console.log("no estan admitidos esos productos en la ferretería")
        }

        
    }

    listarClavos():void{
        console.log("lista de stock de tipos de clavo de la ferretería: ")
        this.productos.forEach((producto)=>console.log(`${producto.nombre}(${producto.tipo}): ${producto.stock}`))
    }

}
//productos (martillos y alambres)




// caso clavos:
const clavos = new clavo("MarcaX", 100, 50, true, "anillados");

// Agregar productos
clavos.agregarProducto("Clavo", "anillados", 20);
clavos.agregarProducto("Clavo", "cabeza ancha", 15);
clavos.agregarProducto("Clavo", "anillados", 10); // Actualiza el stock

// Listar productos
clavos.listarProductos();
