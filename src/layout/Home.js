import React from 'react';
import CoronaState from '../coronaApi/CoronaState';
import Graph from '../coronaApi/Graph';
import './Home.css';

const Home = () => {
  
  return (
    <>
      <div className="header">
        <div className="header_inner">
          <h1>COVID-19</h1>
          <select className="opt_box">
            <option>국내</option>
            <option>외국</option>
          </select>
          {/* <select>{country && country.map((v,i)=><option key={v+i}>{v.Country}</option>)}</select> */}
        </div>
      </div>
        
      <div className="main">
        <h1>코로나 현황</h1>
        <CoronaState/>
        <Graph/>
      </div>
    </>
  )
}

export default Home;


