import React from 'react'
import { JumbaMode } from './jumbatronstyle';

function Jumbatron() {

    const JumbatronData = [
        {
            title: 'Aproveite na TV.',
            text: 'Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.',
            image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
            open: true,

        } ,
        
        {
            title: 'Baixe séries para assistir offline.',
            text: 'Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.',
            image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
            open: false,
        },
        
        {
            title: 'Assista quando quiser.',
            text: 'Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.',
            image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
            open: true,
        }
    ];

    return (

        <JumbaMode>
            {JumbatronData.map((e) => (
            <div  className={'JInfo ' + (e.open ? '' : 'Right')} >
                    <div className="info">
                        <div className="Jtitolo">{e.title}</div>
                        <div className="Jdesc"> {e.text} </div>
                     </div>

                        <img className="Jimage" src={e.image} />
                
                </div>

            ))}
        </JumbaMode>
    )
}

export default Jumbatron;
