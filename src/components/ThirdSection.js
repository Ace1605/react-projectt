import React from 'react';
import '../App.css';
import './SecondSection.css';
import {Button} from './Button';

/*
order:${({reverse}) => (reverse ? '2' : '1')};
order:${({reverse}) => (reverse ? '1' : '2')};
*/



const ThirdSection = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    reverse,
    image
}) => {
  return (
<div className='section'>
    <div className='container section-container'>
    <div className='right-column-1' reverse ={reverse}>
                <img src={image} alt='home'/>
         </div>
        <div className='left-column-1'>
            <h1>{heading}</h1>
            <p>{paragraphOne} {paragraphOne}</p>
            <p>{paragraphTwo} {paragraphTwo}</p>
            <Button to='/homes' className='btn' 
            buttonStyle='btn--primary' 
            buttonSize='btn--medium'>{buttonLabel}</Button>
        </div>
        
    </div>
</div>


  );
};

export default ThirdSection;