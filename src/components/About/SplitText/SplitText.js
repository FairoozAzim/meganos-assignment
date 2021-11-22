import React from 'react';

const SplitText = (props) => {
    const text = props.text;
    const letterArray = text.split("");

   
    return (
      <p className='motion mt-4 me-0 d-inline'>
          {
              letterArray.map((letter,index) => {
                 const style = {"--index": index}
                  return <span style={style}>{letter}</span>
              })
          }
      </p>
    );
};

export default SplitText;