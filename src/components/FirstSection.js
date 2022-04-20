import React from 'react';
import { Button } from './Button';
import './FirstSection.css';
import '../App.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LeftSection from '../Sections/LeftSection';
import RightSection from '../Sections/RightSection';
import { InfoDataFour, InfoDataThree } from '../Data/InfoData';

const FirstSection = () => {
    
  return (
    <div className='first-container'>
        <div className='container container-wrapper'>
            <div className='small-div'>
                <h1>GET YOUR NEW HOME</h1>
                <p>What are you waiting for</p>
                <div className='first-btn'>
                <Button path='/about' 
                className='btn' 
                buttonStyle='btn--outline' 
                buttonSize='btn--medium'>BROWSE</Button>
                </div>
            </div>
            <div className='t-right-sec'>
                <Tabs>
                    <TabList className='upper-links'>
                        <Tab className='lefty'>Left</Tab>
                        <Tab className='righty'>Right</Tab>
                    </TabList>
                    <TabPanel>
                        <LeftSection {...InfoDataThree}/>
                    </TabPanel>
                    <TabPanel>
                        <RightSection {...InfoDataFour}/>
                    </TabPanel>
                </Tabs>

            </div>

        </div>
        
    </div>
  )
}

export default FirstSection;