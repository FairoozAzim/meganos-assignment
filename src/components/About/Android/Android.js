import React from 'react';
import android from '../../../images/android.png';
import {AiOutlineApple} from 'react-icons/ai';
import {FiPlay} from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Android = () => {
    return (
        <div className='container d-flex flex-column flex-lg-row justify-content-around mt-5 mx-auto mb-5'>
            <img src={android} alt='' className='w-50 h-75 mx-auto'></img>
            <div className='d-flex flex-column align-items-center justify-content-center'>
               <Fade right>
               <h2>Download our App <br/> For a Better Experience</h2>
                <p className='mt-2'>Download the Frame mobile app where you can join us immediately! <br/>Let's do this! </p>
               </Fade>
                <div className='container d-flex justify-content-lg-between justify-content-center '>
                   <Bounce top>
                   <button className='me-3 shop-large'><AiOutlineApple className='fs-4 mb-2 me-2' />App Store</button>
                    <button className='shop-large'><FiPlay className='fs-4 mb-1 me-2'/> Play Store</button>
                   </Bounce>
                </div>
            </div>
        </div>
    );
};

export default Android;