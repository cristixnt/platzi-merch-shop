import axios from 'axios';
import React, { useState, useEffect } from 'react';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBSg-11d2AdLL_rg9cIXwbXkkvU8ckfx1g`;

    useEffect(async () => {
        const responde = await axios(API)
        setMap(responde.data.results[0].geometry.location);
    }, []);

    return map;
}

export default useGoogleAddress;
