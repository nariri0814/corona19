import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Country() {
    const [ country, setCountry ] = useState([]);
    
    useEffect(()=> {
        axios.get ("https://api.covid19api.com/summary")
            .then(res => {
                setCountry(res.data.Countries)
            }).catch(error => console.log(error))
    }, []);
    
    return (
        <>
          {country && country.map((v,i)=><div key={v+i}>{v.Country}</div>)}
        </>
    )
}

export default Country;

