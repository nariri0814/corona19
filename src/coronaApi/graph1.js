import React, { useState, useEffect } from 'react'
import axios from 'axios'


async function GraphData() {
    const graph1data = await axios.get ("https://api.covid19api.com/summary")
    const CountriesData = graph1data.data.Countries

    // CountriesData.forEach(function(element){
    //     // console.log(element)
    //     return element
    // })


    // console.log(GraphData())
    return CountriesData;
}
GraphData()

function Graph1() {
    const [ data, setData ] = useState([])
    
    useEffect(()=> {
        const reponse = GraphData();
        reponse.then((promise)=> setData(promise));
    }, [])
    
    return (
        <>
            {data && data.map((v,i)=><div key={v+i}>{v.Country}</div>)}
        </>
    )
}

export default Graph1;

