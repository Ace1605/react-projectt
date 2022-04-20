import React from 'react';
import '../../App.css';
import { InfoData, InfoDataTwo} from '../../Data/InfoData';
import FirstSection from '../FirstSection';
import Layout from '../Layout';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';


function Home () {
    return(
        <Layout>
        <FirstSection />
        <SecondSection {...InfoData}/>
        <ThirdSection {...InfoDataTwo}/>
        </Layout>
    );
}

export default Home;

