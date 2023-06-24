import styled from "styled-components"
function Footer(){
    return(
        <MyFooter>
            <p >Copyright &copy; 2023 Todos los derechos reservados</p>
        </MyFooter>
    )
}

const MyFooter = styled.div`
    background-color: #131921;
    color: white;
    padding: 10px 14px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 0 10px #000;
`
export default Footer