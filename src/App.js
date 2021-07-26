import React from 'react';
// import { HashRouter, Route } from 'react-router-dom';
import Home from './layout/Home';
// import Overseas from './coronaApi/Overseas';
import './App.css';

const App = () => {
    return (
      // <HashRouter>
      //   <Route path="/" exact={true} component={Home}/>
      //   <Route path="/overseas" component={Overseas}/>
      // </HashRouter>
      <Home/>
    )
}

export default App;
