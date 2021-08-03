import React from 'react';
import { Link } from 'react-router-dom';

//STYLES
import './style.css';

const CardItem = ({
    path,
    src,
    itemText,
    lable,
    cardClass
}) => {
    return(
        <>
            <div className={`card-items ${cardClass}`}>
                <div className="cards-flex">
                    <Link to={path}>
                        <figure data-category={lable}>
                            <img src={src} />
                        </figure>
                        <h3>{itemText}</h3>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardItem;