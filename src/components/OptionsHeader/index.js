import styled from 'styled-components';

const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    text-align: center;
`

const Options = styled.ul`
    display: flex;
`

const textoOption = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OptionsHeader() {
    return (
        <Options>
            { textoOption.map ( (text) => (
                <Option><p>{text}</p></Option>
            ) ) }
        </Options>
    )
}

export default OptionsHeader;