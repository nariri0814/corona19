import React from 'react'
import Graph1 from './coronaApi/graph1';
import Graph2 from './coronaApi/graph2';
import './App.css'

const App = () => {
    return (
      <>
        <div className="header">
            <h1>COVID-19</h1>
            <select>
                <option>국내</option>
                <option>외국</option>
            </select>
        </div>
        <div className="main">
          <h2>국내 코로나 현황</h2>
          <div className="graph1">
            <Graph1/>
          </div>
          <div className="graph2">
            <Graph2/>
          </div>
          <div className="graph3">

          </div>

        </div>
      </>
    )
}

export default App;
