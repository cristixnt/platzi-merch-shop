import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader, LoadScript } from '@react-google-maps/api';

const Map = ({data}) => {

    const containerStyle = {
        width: '90%',
        height: '500px'
    };

    const center = {
        lat: data.lat,
        lng: data.lng
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBCDcOQGjujqckJwY_nTdphiLqygXaNtiE">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );

}

export default Map;