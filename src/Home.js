import React from 'react'
import Common from './Common'; 
import { NavLink } from 'react-router-dom';
import web from '../src/images/img-2.svg';

const Home =() => {
    return(<>
   <Common name='This is my First blog made website ' imgsrc={web} visit='/about' btname="Let's start our journey"  />
    </>
    );
};
 
export default Home;