import React from 'react';

//STYLES
import './style.css';

//COMPONENTS
import Button from '../buttons/index';

const Header = () => {
    return(
        <>
            <header>
                <div className="container header-flex">
                    <video src="/videos/video-2.mp4" autoPlay loop muted />
                    <h1>ADVENTURE AWAITS</h1>
                    <p>What are you Waiting for?</p>
                    <div className="btn-control">
                        <Button className="btns" buttonStyle="btn-outline" buttonSize="btn-larg" buttonMobile="btn-mobile" children="GET STARTED" />
                        <Button className="btns" buttonStyle="btn-primry" buttonSize="btn-larg" buttonMobile="btn-mobile">WATCH TRAILER <i class="far fa-play-circle"></i></Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;