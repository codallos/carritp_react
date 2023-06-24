import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/cart.svg";
import CardProductoCarrito from "./cardProductoCarrito";
import EncabezadosCarrito from "./encabezadosCarrito";
import { useState } from "react";
import { useContext } from "react";
import { contextoListadoProductosCarrito } from "../context/listadoProductosCarrito";

function Header() {


    const [mostraContenidoCarrito, setMostrarContenidoCarrito]= useState(false)
    const { listaProductosCarritoDos, setListaProductosCarritoDos}  = useContext(contextoListadoProductosCarrito)
    let totalCompra = listaProductosCarritoDos.reduce((acumulador,producto) => acumulador + (producto.precioDescuento*producto.cantidad),0 )
    let totalProductos = listaProductosCarritoDos.reduce((acumulador,producto) => acumulador + (producto.cantidad),0 )
    return (
        <MyHeader totalCompra={totalCompra}>
            <Indicador onClick={()=>setMostrarContenidoCarrito(!mostraContenidoCarrito)} >{totalProductos}</Indicador>
            <Marca>Tienda</Marca>
            <LogoCarrito onClick={()=>setMostrarContenidoCarrito(!mostraContenidoCarrito)} />
            {mostraContenidoCarrito && 
            <ContenidoCarrito>
                <EncabezadosCarrito />
                <MainCarrito>
                    {listaProductosCarritoDos.length !== 0? 
                    <>  
                        {listaProductosCarritoDos.map(producto => (
                            <CardProductoCarrito key={producto.Id} producto={producto}/>
                        ))}
                        <h3>Total ${totalCompra}</h3>
                    </>
                    :
                    <TextoVacio>No hay productos agregados</TextoVacio> }
                </MainCarrito>
                <LimpiarCarrito onClick={()=>setListaProductosCarritoDos([])} >Limpiar Carrito</LimpiarCarrito>
            </ContenidoCarrito>}
        </MyHeader>
    );
}

const MyHeader = styled.header`
    background-color: #131921;
    color: white;
    padding: 10px 14px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 0 10px #000;
    position: sticky;
    top: 0;
 
`;

const Indicador = styled.span`
background-color: #F7CA00;
width: 35px;
height: 35px;
position: absolute;
top: 5px;
right: 3px;
border-radius: 30px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
color: #000;
font-weight: bold;
z-index: 1;
transition:background-color 0.5s;
cursor: pointer;
&:hover{
    background-color: #fff;
}
`
const LogoCarrito = styled(Logo)`
    width: 50px;
    height: 50px;
    cursor: pointer;
    fill: #fff;
    transition: fill 1s;
    position: relative;
    &:hover{
        fill: #F7CA00;
        stroke: #000;
    }
`;
const ContenidoCarrito = styled.div`
    border: 1px solid #000;
    background-color: #fff;
    max-width: 600px;

    position: absolute;
    top: 100%;
    right: 0;
    color: #000;
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-row-gap: 10px;
    box-shadow: 0 0 10px #000;
    max-height: 600px;
    overflow-y: scroll;
`;
const MainCarrito = styled.div`
    grid-column: span 4;
    min-height: 100px;
    border: 1px solid gray;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;

`;

const LimpiarCarrito = styled.button`
    grid-column: span 4;
    margin: 0px 30px 10px 30px;
    padding: 10px;
    font-size: 16px;
    background-color: #F7CA00;
    border: none;
    border-radius: 10px;
    transition: background-color 0.5s;
    cursor: pointer;
    &:hover{
        background-color: #dfb600;
    }
`

const Marca = styled.h1`
user-select: none;
cursor: pointer;
`

const TextoVacio = styled.div`
    color: gray;
    text-align: center;
    margin: auto;
    width: 500px;

`

export default Header;
