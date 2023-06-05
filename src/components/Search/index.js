import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dataSearch'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Search() {
    // Criando estados, salvar dados que vão mudar e vão ficar ao nosso dispor
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <Input 
                placeholder="Escreva a sua próxima leitura" 
                onBlur={evento =>{
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
           {livrosPesquisados.map}
        </SearchContainer>
        
    )
}

export default Search