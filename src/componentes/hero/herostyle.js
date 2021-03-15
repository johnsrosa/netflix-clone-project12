import React from 'react'
import styled from 'styled-components';

export const Heroimage= styled.div`
    position: relative;
    z-index: -1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    text-align: center;
    background-image:   linear-gradient(180deg,rgba(0,0,0,.9) 0,   rgba(0,0,0,0) 90%),    
                        linear-gradient(360deg,rgba(0,0,0,1) 3%,   rgba(0,0,0,0.2) 25%)
  ,
  url('https://assets.nflxext.com/ffe/siteui/vlv3/70deccb9-9b6c-4be1-b781-18dd1bcd9264/33d1445c-b8fc-41ba-9e92-0601ed5cc279/IT-en-20210301-popsignuptwoweeks-perspective_alpha_website_small.jpg');

`;

export const Title= styled.h1`
    color: white;
    font-size: 1.75rem;
    display: block;
    font-weight: 200;
    letter-spacing: 0.004rem;
    line-height: 5rem;
    padding: 0 auto;
    
`;

export const Titleh2= styled.h2`
    color: white;
    font-size:1.75rem;
    display: block;
    margin: 1.5rem;
    line-height: 2rem;
    font-weight: 300;
    letter-spacing: 0.03rem;
`;

