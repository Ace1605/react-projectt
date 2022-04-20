import React from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import GlobalsEstate from './GlobalsEstate';
import './MapSection.css';

const center ={lat:6.485120, lng:3.385470}

function MapSection() {

    const{isLoaded} =useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    if (!isLoaded){
        return <GlobalsEstate/>
    }

  return (
    <div className='map-div'>{/*Google Map Box */}
    <GoogleMap center ={center} zoom ={15} mapContainerStyle ={{width:'100%', height:'100%', overflow:'initial'}}>
        {/*Display markers, or directions */}
        <Marker position={center}/>
    </GoogleMap>
    
    </div>  
    )
}

export default MapSection ;  