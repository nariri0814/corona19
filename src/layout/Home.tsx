import React from "react";
import CovidState from "../containers/CovidState";
import { StyledHeader, StyledMain } from "../StyledComponents/StyledComponents";

const Home = () => {
  return (
    <>
      <StyledHeader>
        <div className="inner">
          <h1>COVID-19 국내 현황</h1>
        </div>
      </StyledHeader>
      <StyledMain>
        <h2>코로나바이러스-19</h2>
        <CovidState />
      </StyledMain>
    </>
  );
};

export default Home;
