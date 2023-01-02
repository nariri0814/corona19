import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";

type TChart =
  | ChartData<"line", number[], string>
  | ((canvas: HTMLCanvasElement) => ChartData<"line", number[], string>);

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 30px 0;
`;
const Inner = styled.div`
  width: 100%;
  overflow: hidden;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .desc_box {
    width: 200px;
    text-align: center;
    background: #2e374c;
    color: #fff;
    padding: 20px 0;

    p {
      margin: 0;
      margin-bottom: 10px;
    }
  }
`;
const StyledGraph = styled.div`
  position: relative;
  width: calc((100% - 40px) / 2);
  margin: 10px;
  float: left;
`;

const KoreaCovidState = () => {
  const [confirmed, setConfirmed] = useState<TChart>();
  const [deaths, setDeaths] = useState<TChart>();

  const [lastData, setLastData] = useState<number[]>([]);

  useEffect(() => {
    const axiosData = async () => {
      const res = await axios.get(
        "https://api.covid19api.com/total/dayone/country/kr"
      );
      krData(res.data);
    };
    const krData = (items: any) => {
      const arr = items.reduce((acc: any, cur: any) => {
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();

        const active = cur.Active;
        const confirmed = cur.Confirmed;
        const deaths = cur.Deaths;
        const recovered = cur.Recovered;

        const matchItem = acc.find(
          (i: any) => i.year === year && i.month === month
        );
        if (!matchItem) {
          acc.push({ year, month, date, active, confirmed, deaths });
        }
        if (matchItem && matchItem.date < date) {
          matchItem.year = year;
          matchItem.month = month;
          matchItem.date = date;

          matchItem.active = active;
          matchItem.confirmed = confirmed;
          matchItem.deaths = deaths;
          matchItem.recovered = recovered;
        }

        return acc;
      }, []);
      const labels = arr.map((a: any) => `${a.month + 1}월`);
      setConfirmed({
        labels: labels?.slice(labels.length - 10, labels.length),
        datasets: [
          {
            label: "확진자",
            backgroundColor: "salmon",
            data: arr
              .map((a: any) => a.confirmed)
              .slice(labels.length - 10, labels.length),
          },
        ],
      });
      setDeaths({
        labels: labels?.slice(labels.length - 10, labels.length),
        datasets: [
          {
            label: "사망자",
            backgroundColor: "red",
            data: arr
              .map((a: any) => a.deaths)
              .slice(labels.length - 10, labels.length),
          },
        ],
      });
      const last = arr[arr.length - 1];
      setLastData([last.confirmed, last.recovered, last.deaths]);
    };
    axiosData();
  }, []);

  return (
    <>
      <Container>
        <Inner>
          <div className="desc_box">
            <p>누적확진자</p>
            {lastData[0]?.toLocaleString()}
          </div>
          <div className="desc_box">
            <p>격리해제</p>
            {lastData[1]?.toLocaleString()}
          </div>
          <div className="desc_box">
            <p>사망자</p>
            {lastData[2]?.toLocaleString()}
          </div>
        </Inner>
        <StyledGraph>{confirmed && <Line data={confirmed} />}</StyledGraph>
        <StyledGraph>{deaths && <Line data={deaths} />}</StyledGraph>
      </Container>
    </>
  );
};

export default KoreaCovidState;
