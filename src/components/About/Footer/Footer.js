import React from 'react';
import './Footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import logo from '../../../images/logo.png'
const Footer = () => {
    return (
        <div className='footer p-4'>
        <div className='d-flex justify-content-between flex-column flex-md-row'>
            <div>
                <h3>Contact</h3>
                 <p>info@framefitness.com</p>
                 <p className='mt-3 mb-3'>Frame Innovative Technologies Corp. <br/>
                    265 S. Western Avenue <br/>
                    P.O. Box #741940 <br/>
                    Los Angeles, CA 90004-9998 <br/>
                </p>
                <div>
                    <FaFacebook className='me-3 fs-4 social'/>
                    <FaTwitter className='me-3 fs-4 social'/>
                    <FaInstagram className='me-3 fs-4 social'/>
                </div> 

            </div>
            <div className='mt-5 brand-logo'>
            <img src={logo} alt='logo' width='120px' height='100px'></img> 
            <small >TM</small>
            </div>
            <div className='terms-mt'>
              <p className='ms'>Terms and Conditions</p>
             <div className='d-flex mt-5'>
             <p className="me-4"> &copy; Copyright 2021</p>
             <p>Frame is patent pending</p>
             </div>
            </div>

        </div> 
            
        </div>
    );
};

export default Footer;