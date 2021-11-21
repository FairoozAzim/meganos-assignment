import React from 'react';
import './Android.css'
import android from '../../../images/android.png';
import {AiOutlineApple} from 'react-icons/ai';
import {GrGooglePlay} from 'react-icons/gr';


const Android = () => {
    return (
        <div className='container d-flex flex-column flex-lg-row justify-content-around mt-5 mx-auto mb-5'>
            <img src={android} alt='' className='w-50 h-75 mx-auto'></img>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h2>Download our App <br/> For a Better Experience</h2>
                <p className='mt-2'>Download the Frame mobile app where you can join us immediately! <br/>Let's do this! </p>
                <div className='d-flex justify-content-between'>
                    <button className='me-3 shop-large'><AiOutlineApple/>App Store</button>
                    <button className='shop-large'><GrGooglePlay/> Play Store</button>
                </div>
            </div>
        </div>
    );
};

export default Android;