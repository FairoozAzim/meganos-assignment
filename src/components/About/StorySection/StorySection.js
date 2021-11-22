import React from 'react';
import './StorySection.css'
import Fade from 'react-reveal/Fade';
const StorySection = () => {
    return (
        <div className='container story'>
           <div className='d-flex justify-content-around flex-column flex-md-row'>
               <Fade left>
               <h1 className='story-header mb-5'>Our Story</h1>
               </Fade>
               <Fade right>
               <p className='story-text'>Melissa Bentivoglio and Lee Belzberg have paired together their extensive backgrounds of elite fitness instruction and entrepreneurship to bring you Frame—a groundbreaking approach to pilates disrupting the traditional at-home fitness market. </p>

               </Fade>
           </div>
        </div>
    );
};

export default StorySection;