import { useEffect, useRef } from 'react';
import Common from './Common'; 
import web from '../src/images/img-2.svg';
import Lottie from 'lottie-web';
import { NavLink } from 'react-router-dom';
// import React from 'react';


const About =() => {

    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            
            animationData: require('./office.json')
            
       
        })
        
    },
     [])
    
    
    
   
    return(
        
    
    <>
    
    
    <Common name='Welcome to my About page ' imgsrc={web} visit='/post' btname='My works'  />
    <div className="container"  ref={container} ></div>

    
    </>
    
    
    );
    
    
};
 
export default About;