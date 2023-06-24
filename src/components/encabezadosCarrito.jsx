import styled from "styled-components";

function EncabezadosCarrito() {
    return (
        <>
            <TitulosCarrito>Imagen</TitulosCarrito>
            <TitulosCarrito>Producto</TitulosCarrito>
            <TitulosCarrito>Precio</TitulosCarrito>
            <TitulosCarrito>Cantidad</TitulosCarrito>
        </>
    );
}

const TitulosCarrito = styled.h3`
    text-align: center;
    border-bottom: 1px solid gray;
    display: flex;
    background-color: aliceblue;
    max-height: 35px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    user-select: none;
`;

export default EncabezadosCarrito;
