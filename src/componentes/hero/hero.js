import React from 'react'
import Validation from '../validation/validationelements';
import { Heroimage, Title, Titleh2 } from './herostyle';

const Hero = () => {
    return (
        <Heroimage>
            <Title><h1>Filmes, séries e muito mais.<br />Sem limites.</h1></Title>
            <Titleh2>Assista onde quiser. Cancele quando quiser.</Titleh2>
            <Validation />
        </Heroimage>
    )
}

export default Hero;


