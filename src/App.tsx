import React from "react";
import { Route, Routes } from "react-router";
import { CountryDetail } from "./containers/CountryDetail";
import Home from "./layout/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countryDetail" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
