import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {FootContainer, FooterRow} from './footerstyle';

function Footer() {

    const options = ['English', 'Português', 'Italiano']

    const defaultOptions = options[0];

    const listasFooter = [
        {
            lista: ['Perguntas frequentes','Relações com investidores','Formas de assistir', 'Informações corporativas', 'Originais Netflix'],
            link: ['#','#','#','#','#']
        },
        {
            lista: ['Centro de ajuda', 'Carreiras','Termos de uso','Entre em contato' ],
            link: ['#','#','#','#']
        },
        { 
            lista: ['Conta', 'Resgatar cartão pré-pago','Privacidade', 'Teste de velocidade'],
            link: ['#','#','#','#']
        },
        { 
            lista:['Imprensa','Comprar cartão pré-pago','Preferências de cookies', 'Avisos legais'],
            link: ['#','#','#','#']
        }
        ];

    return (

        <FootContainer>

            <FooterRow>
                <h5>Dúvidas? Ligue 0800-761-4631</h5>

                <div className="listasFooter">
                    {listasFooter.map((e) =>(
                        <ul>
                            <li> <a href={e.link[0]}> {e.lista[0]}</a> </li>
                            <li> <a href={e.link[1]}> {e.lista[1]}</a> </li>
                            <li> <a href={e.link[2]}> {e.lista[2]}</a> </li>
                            <li> <a href={e.link[3]}> {e.lista[3]}</a> </li>
                            <li> <a href={e.link[4]}> {e.lista[4]}</a> </li>
                        </ul>
                    ))}

                </div>

                <Dropdown className="DropMeFooter" options={options} value={defaultOptions}/>
                        <h6>Netflix Clone by John</h6>

            </FooterRow>

        </FootContainer>
    )
}

export default Footer;
