import React from 'react';
import { NavContainer, Button, Logo, Image, ButtonContainer } from './navbarelements';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Navbar= () => {

  const options = ['English', 'Português', 'Italiano']

  const defaultOptions = options[0];

function shoot() {
        alert("You are Fucking Veg");
      }
    return (

    <NavContainer>
        <Logo> <Image src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
         </Logo>

          <ButtonContainer>

            <Dropdown options={options} value={defaultOptions}/>
            
            <Button onClick={shoot}> SIGN IN</Button>
            

            </ButtonContainer>

    </NavContainer>    
)};



export default Navbar;

