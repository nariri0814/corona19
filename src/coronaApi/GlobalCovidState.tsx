import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  width: 780px;
  padding: 10px 20px;
  margin: 10px 0;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  text-align: center;

  h2 {
    padding: 5px;
  }

  h2 span {
    font-size: 23px;
    font-weight: 700;
  }

  .desc_box {
    width: calc((100% - 40px) / 2);
    margin: 0 10px;
    text-align: left;
    float: left;
  }
`;

function GlobalCovidState() {
  const [country, setCountry] = useState([]);
  const [date, setDate] = useState(0);

  const [covidSummary, setCovidSummary] = useState<{
    newConfirmed: number;
    newDeaths: number;
    totalConfirmed: number;
    totalDeaths: number;
  }>({
    newConfirmed: 0,
    newDeaths: 0,
    totalConfirmed: 0,
    totalDeaths: 0,
  });

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        setCountry(res.data.Countries);
        return res.data.Global;
      })
      .catch((error) => console.log(error))
      .then((res) => {
        setDate(res.Date.split("T")[0]);
        setCovidSummary({
          newConfirmed: res.NewConfirmed,
          newDeaths: res.NewDeaths,
          totalConfirmed: res.TotalConfirmed,
          totalDeaths: res.TotalDeaths,
        });
      });
  }, []);

  return (
    <>
      {/* <select>{country && country.map((v,i)=><option key={v+i}>{v.Country}</option>)}</select> */}
      <Container>
        <h2>
          <span>Date:</span> {date}
        </h2>
        <div className="desc_box">
          <h2>
            <span>일일 확진자 :</span>{" "}
            {covidSummary.newConfirmed.toLocaleString()}
          </h2>
          <h2>
            <span>일일 사망자 :</span> {covidSummary.newDeaths.toLocaleString()}
          </h2>
        </div>
        <div className="desc_box">
          <h2>
            <span>총 확진자 :</span>{" "}
            {covidSummary.totalConfirmed.toLocaleString()}
          </h2>
          <h2>
            <span>총 사망자 :</span> {covidSummary.totalDeaths.toLocaleString()}
          </h2>
        </div>
      </Container>
      {/* {country && country.map((v,i)=><h3 key={v+i}>{v.Country}</h3>)} */}
    </>
  );
}

export default GlobalCovidState;
