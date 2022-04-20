import React from 'react';
import { Button } from '../components/Button';
import '../components/FirstSection.css';

const RightSection = ({
    label1,
    input1,
    label2,
    input2,
    label3,
    input3,
    label4,
    input4,
}) => {
  return (
    <div id='other' className='lower-forms-2 '>
                    <div className='ii-lower'>
                        <div className='ii-l-left'>
                            <label>{label1}</label>
                            <input placeholder={input1}></input>
                        </div>
                        <div className='ii-l-right'>
                            <label>{label2}</label>
                            <input placeholder={input2}></input>
                        </div>
                    </div>
                    <div className='ii-2-lower'>
                    <div className='ii-2-l-left'>
                            <label>{label3}</label>
                            <input placeholder={input3}></input>
                        </div>
                        <div className='ii-2-l-right'>
                            <label>{label4}</label>
                            <input placeholder={input4}></input>
                        </div>
                    </div>
                    <div className='third-lower'>
                    <Button path='/about' 
                     className='btn'  buttonStyle='btn--primary' 
                     buttonSize='btn--large'>Submit</Button>
                    </div>
                    
                </div>
  )
}

export default RightSection;