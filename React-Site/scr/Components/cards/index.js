import React from 'react';

//STYLES
import './style.css';

//COMPONENTS
import CardItem from './card-item/index';

const Cards = () => {
    return(
        <>
            <main>
                <div className="container main-flex">
                    <h1>Check Out This Epic Destination!</h1>
                    <div className="cards-wrapper">
                        <CardItem
                        path="/services"
                        cardClass="biggerThan"
                        lable="Adventure"
                        src="/images/img-1.jpg"
                        itemText={`Explore the Hidden Waterfall
                        Deep Inside the Amazone
                        Jungle`} />

                        <CardItem
                        path="/services"
                        cardClass="biggerThan"
                        lable="Adventure"
                        src="/images/img-2.jpg"
                        itemText={`Explore the Hidden Waterfall
                        Deep Inside the Amazone
                        Jungle`} />

                        <CardItem
                        path="/services"
                        cardClass="smallerThan"
                        lable="Adventure"
                        src="/images/img-3.jpg"
                        itemText={`Explore the Hidden Waterfall
                        Deep Inside the Amazone
                        Jungle`}/>

                        <CardItem
                        path="/services"
                        cardClass="smallerThan"
                        lable="Adventure"
                        src="/images/img-4.jpg"
                        itemText={`Explore the Hidden Waterfall
                        Deep Inside the Amazone
                        Jungle`} />

                        <CardItem
                        path="/services"
                        cardClass="smallerThan"
                        lable="Adventure"
                        src="/images/img-5.jpg"
                        itemText={`Explore the Hidden Waterfall
                        Deep Inside the Amazone
                        Jungle`} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cards;