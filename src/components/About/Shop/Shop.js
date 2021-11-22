import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop text-center'>
          <Bounce>
          <h1 className='text-center mt-5 mb-5 moving'>Get Moving</h1>
            
          </Bounce>
          <button className=' shop-large mt-3 fs-4'>Shop Now</button>
           

        </div>
    );
};

export default Shop;