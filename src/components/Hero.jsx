import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = (prop) => {
    const {heading, image, visit, btnname} = prop;
    return (
        <>
            <section className="d-flex align-items-center hero-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 col-lg-10 col-md-6 mx-auto">
                            <div className="row">                         
                            <div className="col-lg-6 col-md-6 pt-5 pt-lg-0 order-lg-1 order-2 d-flex flex-column justify-content-center" >
                                <h1>{heading} <strong className="brand-name">RajuSingh</strong></h1>
                                <h2 className="my-3">We are the team of talented developer making websites</h2>
                                
                                <div className="mt-3">
                                    <NavLink to={visit} className="btn-get-started"> {btnname} </NavLink>
                                </div>    
                            </div>    
                            
                            
                            
                            <div className="col-lg-6 order-1 order-lg-2 header-img  animated">
                                <img src={image} alt="hero-img"  className="img-fluid animated"/>

                            </div>    
                        </div>
                        
                        </div>
                    </div>
                    
                </div>
                
            </section>
        </>
    )
}

export default Hero
