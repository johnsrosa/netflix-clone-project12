import React from 'react'
import styled from 'styled-components/macro';


export const NavContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    z-index: 999;
    background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.9) 15%,
                rgba(0, 0, 0, 0)
              );
`;

export const Logo = styled.div`
    color:white;
`;

export const Button= styled.button`
    background: #e50914;
    line-height: normal;
    padding: 9px 20px;
    font-weight: 400;
    font-size: 1rem;
    float: right;
    color: #ffffff;
    border: none;
    cursor: pointer;
    border-radius:2.5px;
    margin-left: 10px;

`;

export const Image= styled.img`
    height: 95px;
    width:175px;  
`;

export const ButtonContainer= styled.div`
    display: flex;
`;
