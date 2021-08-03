import React from 'react';
import { Link } from 'react-router-dom';

//STYLING
import './style.css';

const Style = ["btn-primry", "btn-outline"];
const Size = ["btn-medium", "btn-larg"]

const Button = ({
    children,
    buttonStyle,
    buttonSize,
    buttonMobile,
    type,
    onClick,
    className
}) => {
    const checkButtonStyle = Style.includes(buttonStyle) ? buttonStyle : Style[0];
    const checkButtonSize = Size.includes(buttonSize) ? buttonSize : Size[0];

    return (
        <Link className={className} to="/signup">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${buttonMobile}`} type={type} onClick={onClick}>{children}</button>
        </Link>
    )
}

export default Button;