import React from 'react';
import Hero from './Hero';
import hero1 from './images/hero1.png'






const Home = () => {
    return (
        <>
            <Hero heading="Grow your business with" image={hero1} visit="/services" btnname="Get Started"/>
        </>
    )
}

export default Home
