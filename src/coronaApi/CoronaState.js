import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoronaState.css';

// async function GraphData() {
//     const graph1data = await axios.get ("https://api.covid19api.com/summary")
//     const CountriesData = graph1data.data.CountriesData

//     return CountriesData;
// }
// GraphData()

function CoronaState() {
    //Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, Date
    const [ country, setCountry ] = useState([]);
    const [ date, setDate ] = useState(0);
    const [ newConfirmed, setNewConfirmed ] = useState(0);
    const [ newDeaths, setNewDeaths ] = useState(0);
    const [ totalConfirmed, setTotalConfirmed ] = useState(0);
    const [ totalDeaths, setTotalDeaths ] = useState(0);

    
    useEffect(()=> {
        axios.get ("https://api.covid19api.com/summary")
            .then(res => {
                setCountry(res.data.Countries)
                return res.data.Global
            }).catch(error => console.log(error))
            .then(res => {
                setDate(res.Date.split('T')[0])
                setNewConfirmed(res.NewConfirmed)
                setNewDeaths(res.NewDeaths)
                setTotalConfirmed(res.TotalConfirmed)
                setTotalDeaths(res.TotalDeaths)
            })
    }, []);
    
    return (
        <>
            {/* <select>{country && country.map((v,i)=><option key={v+i}>{v.Country}</option>)}</select> */}
            <div className="corona_state">
                <h2><span>Date:</span> {date}</h2>
                <div className="co_state_desc">
                    <h2><span>NewConfirmed:</span> {newConfirmed}</h2>
                    <h2><span>NewDeaths:</span> {newDeaths}</h2>
                </div>
                <div className="co_state_desc">
                    <h2><span>TotalConfirmed:</span> {totalConfirmed}</h2>
                    <h2><span>TotalDeaths:</span> {totalDeaths}</h2>
                </div>
            </div>
            {/* {country && country.map((v,i)=><h3 key={v+i}>{v.Country}</h3>)} */}


        </>
    )
}

export default CoronaState;

