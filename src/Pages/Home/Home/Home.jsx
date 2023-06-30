import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Hobbies from '../Hobbies/Hobbies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Hobbies></Hobbies>
        </div>
    );
};

export default Home;