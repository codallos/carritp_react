import styled from "styled-components";
import pathEstrellas from "../assets/estrellas.png";
import { useContext}  from "react";
import { contextoListadoProductosCarrito } from "../context/listadoProductosCarrito";

function CardProductoPrincipal(prop) {

    const {agregaProductosCarrito,} = useContext(contextoListadoProductosCarrito)
    const {img,nombreProducto,precioNormal,precioDescuento} = prop.producto
    return (
        <MyCardProductoPrincipal>
            <ContenedorImagenPrincipal>
                <Imagen src={img} alt="Producto" />
            </ContenedorImagenPrincipal>
            <Descripcion>
                <InfoProducto>{nombreProducto}</InfoProducto>
                <ContenedorEstrellas>
                    <Imagen src={pathEstrellas} />
                </ContenedorEstrellas>
                <InfoProducto>
                    <Normal>${precioNormal}</Normal>
                    <span>${precioDescuento}</span>
                </InfoProducto>
            </Descripcion>
            <BotonAgregar onClick={()=>agregaProductosCarrito(prop.producto)}>Agregar al carrito</BotonAgregar>
        </MyCardProductoPrincipal>
    );
}
const MyCardProductoPrincipal = styled.div`
    border: 1px solid gray;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: aliceblue;
    border-radius: 10px;
    box-shadow: 0 0 10px #0000005f;
    max-width: 320px;
    overflow: hidden;
`;

const Descripcion = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`;
const ContenedorImagenPrincipal = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #131921;
    width: 100%;

`;
const Imagen = styled.img`
    height: 100%;
`;

const InfoProducto = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 300px;
    text-align: center;
`;
const ContenedorEstrellas = styled.div`
text-align: center;
`;

const BotonAgregar = styled.button`
    padding: 10px;
    font-size: 16px;
    background-color: #F7CA00;
    border: none;
    border-radius: 10px;
    margin:0 10px 10px 10px;

    min-width: 300px;
    transition: background-color 0.5s;
    cursor: pointer;
    &:hover{
        background-color: #dfb600;
    }
`
const Normal = styled.span`
font-weight: 100;
text-decoration:line-through;
`
export default CardProductoPrincipal;
