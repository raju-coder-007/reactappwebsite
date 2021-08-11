import React from 'react'
import Hero from './Hero';
import hero1 from './images/hero1.png'

const About = () => {
    return (
        <div>
            <Hero heading="Welcome to About Page" image={hero1} visit="/contact" btnname="Get Contacted"/> 
        </div>
    )
}

export default About
