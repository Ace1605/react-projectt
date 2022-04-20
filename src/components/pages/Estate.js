import React from 'react';
import '../../App.css';
import { InfoData } from '../../Data/InfoData';
import Layout from '../Layout';
import SecondSection from '../SecondSection';
import '../SecondSection.css';


const Estate = () => {
  return (
      <Layout>
            <div className='estate'>
                <h1>Our Estates</h1>
            </div>
            <SecondSection {...InfoData}/>
      </Layout>
    
  )
};
export default Estate;

