import React, { useState } from 'react';

//COMPONENTS
import NavBar from '../navbar/index';
import Header from '../header/index';
import Cards from '../cards/index';

const Home = () => {
    return(
        <>
            <NavBar />
            <Header />
            <Cards />
        </>
    )
}

export default Home;