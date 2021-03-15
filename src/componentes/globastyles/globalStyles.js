import {createGlobalStyle, creatGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: black;
        font-family: 'Martel Sans';
    }


    .ValiForm {
        display: flex;
        flex-wrap: wrap;
        height: 40px;
        width: 90%;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        margin: 0 auto;
        
    }

    .ValiHero {
        color: white;
        margin-bottom: 1rem;
        font-size:16px;
        font-weight: 600;
        text-align: center;
        
    }

    .ValiPlace {
        padding: 2rem 2rem;
        width:50%;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 0.05;
        
    }

    .ValiButton {
        background: #e50914;
        line-height: normal;
        padding: 1.624rem;
        font-weight: 200;
        font-size: 2rem;
        float: right;
        color: #ffffff;
        border: none;
        cursor: pointer;
        border-radius:2.5px;
        margin-left:1.5px;
        width: 20%;

    }

    .faqs {
        width: 100%;
        max-width: 800px;
        margin: 3rem auto;
        padding: 15px;

    }
    
    .faqs .faq {
        margin: 8px;
        padding: 20px;
        background-color: #303030;
        border-radius: 1px;
        color: white;
    }

    .faqs .faq .faq-question {
        position: relative;
        font-size: 20px;
        padding-right: 80px;

        transition: all 0.4s ease;
    }

    .faqs .faq .faq-question:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 15px;
        height: 15px;

        background-image: url('https://icon-library.com/images/plus-icon-white/plus-icon-white-7.jpg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        transition: all 0.4s ease-out;
    }

    .faqs .faq .faq-answer {
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: all 0.4s ease-out;
    }

    .faqs .faq.open .faq-question {
        margin-bottom: 15px;
    }
    
    .faqs .faq.open .faq-question::after {
        transform: translateY(-50%) rotate(90deg);
    }

    .faqs .faq.open .faq-answer {
        max-height: 1000px;
        opacity: 1;
    }

    .fuckme {
    margin: 3rem auto 12rem;
    }

    .options{
        margin: 15px;
        padding: 20px;
        background-color: #303030;
        border-radius: 1px;
        color: white
    }

    .Right {
        display: flex;
        flex-direction: row-reverse;
    }

    .Dropdown-control {         
        width: 200px;        
        display: flex;         
        align-items: center;     
    
    }     
    
    .Dropdown-control::before {       
        content: '';        
        background-image: url('https://icon-library.com/images/white-globe-icon/white-globe-icon-24.jpg');         
        background-size: 20px;         
        display: inline-block;         
        width: 20px;         
        height: 20px;         
        margin-right: 10px;         
        margin-bottom: 5px;              
     }

`;


export default GlobalStyle;