import styled from 'styled-components';    

export const FootContainer = styled.div`
    border-top-width: 10px;     
    border-bottom: 0;     
    border-left: 0;     
    border-right: 0;     
    border-style: solid;     
    border-color: #222;      
    display: flex;     
    justify-content: center;          
    color: #757575;
    height: 60vh;
    align-items: center;
`;

export const FooterRow = styled.div`

    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 900px;
    
    h5 {
        font-size: 1.2rem;
        font-weight: 300;
        letter-spacing: 0.1rem;
    }

    .listasFooter{ 
        margin: 1rem 0 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        ul { 
           list-style: none;
           flex: 1 1 9rem;
           margin-top: 1rem;

           li {
               line-height: 2.2rem;
               font-size: 0.85rem;
               font-weight: 300;
               
              a{
                text-decoration: none;
                color: inherit;
                transition: 0.4s ease;

                &:hover {
                    color:red;
                }
              } 
           }
       }

    }
       

       .DropMeFooter {
           margin: 0 0 1rem -1.2rem;
           display: block;
           width: 200px;
       }



`;



