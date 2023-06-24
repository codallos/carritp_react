import styled from "styled-components";
import CardProductoPrincipal from "./cardProductoPrincipal";
import productos from "../data/productos";

function Main() {
    return (
        <MyMain>
            {productos.map((playera) => (
                <CardProductoPrincipal producto={playera} key={playera.Id} />
            ))}
        </MyMain>
    );
}

const MyMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1100px;
    justify-self: center;
`;

export default Main;
