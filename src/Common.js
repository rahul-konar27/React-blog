import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/images/img-2.svg';

const Common =(props) => {
    return(<>
    <section id='header' className='d-flex align-items-center'>
    <div className='container-fliud '>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-2 order-lg d-flex justify content-center flex-column'>
                        <h1>
                           {props.name}
                            <strong className='blog-name'> Rahul Shiva Konar</strong> </h1>
                        
                        <h2 className='my-3'>
                           To make a strong comunity in the web dev 
                        </h2>
                        <div className='mt-3'>
                            <NavLink to={props.visit} className='btn btn-get-started' >
                            {props.btname}
                            </NavLink>
                        </div>
                        </div> 
                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <img src={props.imgsrc} className='img-fluid animated' alt='Common img'/>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        </section>   
    </>
    );
};
 
export default Common;