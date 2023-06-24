import styled from "styled-components";
import { useContext } from "react";
import { contextoListadoProductosCarrito } from "../context/listadoProductosCarrito";

function CardProductoCarrito(props) {
    const {eliminaProductosCarrito} = useContext(contextoListadoProductosCarrito)
    const {Id, cantidad, img, nombreProducto, precioDescuento} = props.producto

    function manejadorClick(e){
        eliminaProductosCarrito(e.target.id)
    }

    return (
        <CardProducto>
            <ContenedorImagenCarrito >
                <Img src={img} alt="Producto" />
            </ContenedorImagenCarrito>
            <p>{nombreProducto}</p>
            <p>{precioDescuento}</p>
            <p>{cantidad}</p>
            <Delete id={Id} onClick={manejadorClick}>Eliminar</Delete>
            <h4>Subtotal ${precioDescuento*cantidad} </h4>
        </CardProducto>
    );
}

const CardProducto = styled.div`
    background-color: aliceblue;
    grid-column: span 4;
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    position: relative;
`;

const ContenedorImagenCarrito = styled.div`
    min-width: 100%;
    min-height: 110px;
    background-color: #fff;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    `;

const Img = styled.img`
width: 100%;
height: 100%;
`

const Grupo = styled.div`
    display: flex;
    position: relative;
`;

const Delete = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: red;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.5s;
    &:hover{
        background-color: #b91010;
    }
`;

export default CardProductoCarrito;
