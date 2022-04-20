import React from 'react';
import '../App.css';
import './SecondSection.css';
import {Button} from './Button';



const SecondSection = ({
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    reverse,
    image
}) => {
  return (
<div className='section'>
    <div className=' container section-container'>
        <div className='left-column'>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            <Button to='/homes' className='btn' 
            buttonStyle='btn--primary' 
            buttonSize='btn--medium'>{buttonLabel}</Button>
        </div>
        <div className='right-column' reverse ={reverse}>
                <img src={image} alt='home'/>
        </div>
    </div>
</div>


  );
};

export default SecondSection;