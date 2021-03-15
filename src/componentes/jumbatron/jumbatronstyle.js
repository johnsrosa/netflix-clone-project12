import styled from 'styled-components';

export const JumbaMode = styled.div`

background: black;
    color: white;

    .JInfo {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        border-top-width: 10px;
        border-left: 0;
        border-right: 0;
        border-style: solid;
        border-color: #222;
        
        padding: 60px 10%;
    }

    .info {
        flex: 1 1 30rem;
        padding: 30px;

    }

    .Jtitolo {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 4.2rem;
        margin-bottom: 11px;
    }

    .Jdesc {
        font-size: 1.6rem;
        font-weight: 200;
        line-height: 2.4rem;

    }

    .Jimage {
        flex: 1 1 30rem;
        height: 50%;
        width: 50%;     
        
     }
    
    
`;