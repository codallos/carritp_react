import { createContext } from "react";
import { useState } from "react";
const contextoListadoProductosCarrito = createContext();

function ProveedorcontextoListadoProductosCarrito({ children }) {
    const [controlesListadoProductosCarrito, setControlesListadoProducto] =
        useState([]);
    const [listaProductosCarritoDos, setListaProductosCarritoDos] = useState(
        []
    );

    function agregaProductosCarrito(nuevoProducto) {
        const [productoFiltrado] = listaProductosCarritoDos.filter(productoEnCarrito=>productoEnCarrito.Id===nuevoProducto.Id) 
       // console.log(productoFiltrado)

        if(!productoFiltrado){
            setListaProductosCarritoDos([...listaProductosCarritoDos,nuevoProducto,]);
           // console.log("Agregado")
            
        }else{

            let cantidadProducto = productoFiltrado.cantidad
            cantidadProducto+=1
            nuevoProducto={...nuevoProducto,cantidad:cantidadProducto}
    
            let productoFiltradoClon =listaProductosCarritoDos.filter(producto=>producto.Id!==nuevoProducto.Id)
           // console.log("producto_filtradoClon",productoFiltradoClon)
            setListaProductosCarritoDos([...productoFiltradoClon,nuevoProducto])
        }
        

    }

    function eliminaProductosCarrito(id){
        console.log(id)



            let productoFiltradoOk =listaProductosCarritoDos.filter(producto=>producto.Id!=id)
            //console.log("lista de p", listaProductosCarritoDos) 
            if(productoFiltradoOk.length===0){
                setListaProductosCarritoDos([])
                console.log("Desde el if",productoFiltradoOk)
            }else{
                
               // console.log("Desde el else",productoFiltradoOk)
                setListaProductosCarritoDos([...productoFiltradoOk]);

            }
    }



    return (
        <contextoListadoProductosCarrito.Provider
            value={{
                agregaProductosCarrito,
                listaProductosCarritoDos,
                eliminaProductosCarrito,
                setListaProductosCarritoDos,
            }}
        >
            {children}
        </contextoListadoProductosCarrito.Provider>
    );
}

export {
    contextoListadoProductosCarrito,
    ProveedorcontextoListadoProductosCarrito,
};
