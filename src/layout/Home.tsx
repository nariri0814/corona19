import React from "react";
import styled from "styled-components";

import GlobalCovidState from "../coronaApi/GlobalCovidState";
import KoreaCovidState from "../coronaApi/KoreaCovidState";

const StyledHeader = styled.div`
  width: 100%;
  height: 170px;
  background: #424242;

  .inner {
    width: 80%;
    height: 120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: #fff;
  }
  .opt_box {
    width: 110px;
    height: 28px;
  }
`;

const StyledMain = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: -50px;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 40px 30px;
  // border: 1px solid #dee2e6;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <>
      <StyledHeader>
        <div className="inner">
          <h1>COVID-19 현황</h1>
          {/* <select className="opt_box">
            <option>국내</option>
            <option>국외</option>
          </select> */}
          {/* <select>{country && country.map((v,i)=><option key={v+i}>{v.Country}</option>)}</select> */}
        </div>
      </StyledHeader>
      <StyledMain>
        <h1>전세계 코로나 현황</h1>
        <GlobalCovidState />
      </StyledMain>
      <StyledMain>
        <h1>국내 코로나 현황</h1>
        <KoreaCovidState />
      </StyledMain>
    </>
  );
};

export default Home;
