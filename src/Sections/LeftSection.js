import React from 'react';
import { Button } from '../components/Button';
import '../components/FirstSection.css';

const LeftSection = ({
  label1,
  input1,
  label2,
  input2,
  label3,
  input3,
  label4,
  input4,
  label5,
  input5

}) => {
  return (
    <div className='lower-forms-1'>
                    <div className='first-lower'>
                        <div className='f-l-left'>
                            <label>{label1}</label>
                            <input placeholder={input1}></input>
                        </div>
                        <div className='f-l-right'>
                            <label>{label2}</label>
                            <input placeholder={input2}></input>
                        </div>
                    </div>
                    <div className='second-lower'>
                    <div className='s-l-left'>
                            <label>{label3}</label>
                            <input placeholder={input3}></input>
                        </div>
                        <div className='s-l-middle'>
                            <label>{label4}</label>
                            <input placeholder={input4}></input>
                        </div>
                        <div className='s-l-right'>
                            <label>{label5}</label>
                            <input placeholder={input5}></input>
                        </div>
                    </div>
                    <div className='third-lower'>
                    <Button path='/about' 
                     className='btn'  buttonStyle='btn--primary' 
                     buttonSize='btn--large'>Submit</Button>
                    </div>
                    
                </div>
  );
}

export default LeftSection;