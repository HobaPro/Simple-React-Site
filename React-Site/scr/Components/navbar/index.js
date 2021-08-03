import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

//STYLES
import {Nav, LogoLink, H1, Ul, Li, LiLinks} from './style';
import './media.css'

//COMPONENTS
import Button from '../buttons/index';

const NavBar = () => {

    const [button, setButton] = useState(true);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 970) setButton(false)
        else setButton(true)
    }

    window.addEventListener('resize', showButton)
    return (
        <>
            <Nav>
                <div className="container nav-container">
                    <LogoLink to="/">
                        <H1>HoPro <i class="fas fa-chess-knight"></i></H1>
                    </LogoLink>
                    <Ul isOpen={click}>
                        <Li>
                            <LiLinks to="/">Home</LiLinks>
                        </Li>
                        <Li>
                            <LiLinks to="/services">Services</LiLinks>
                        </Li>
                        <Li>
                            <LiLinks to="/products">Products</LiLinks>
                        </Li>
                    </Ul>
                    {button ? <Button buttonStyle="btn-outline" buttonSize="btn-larg" children="Sign Up" /> : <i onClick={handleClick} class={click ? "fas fa-times" : "fas fa-bars"}></i>}
                </div>
            </Nav>
        </>
    )
}

export default NavBar;