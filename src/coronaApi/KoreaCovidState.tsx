import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
  //   const [confirmed, setConfirmed] = useState<
  //     | ChartData<"bar", any, unknown>
  //     | ((canvas: HTMLCanvasElement) => ChartData<"bar", any, unknown>)
  //   >();
  //   const [quaranted, setQuaranted] = useState<{
  //     labels: any;
  //     datasets: {
  //       label: string;
  //       borderColor: string;
  //       fill: boolean;
  //       data: any;
  //     }[];
  //   }>();

  const [lastData, setLastData] = useState<number[]>([]);

  useEffect(() => {
    const axiosData = async () => {
      const res = await axios.get(
        "https://api.covid19api.com/total/dayone/country/kr"
      );
      krData(res.data);
      // .then(res => {
      //     setConfirmed(res.data.Confirmed)
      //     console.log(res.data.Active)
      //     setDeaths(res.data.Deaths)
      // }).catch(error => console.log(error))
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
      //   setConfirmed({
      //     labels,
      //     datasets: [
      //       {
      //         label: "국내 누적 확진자",
      //         backgroundColor: "salmon",
      //         // fill: true,
      //         data: arr.map((a: any) => a.confirmed),
      //       },
      //     ],
      //   });
      //   setQuaranted({
      //     labels,
      //     datasets: [
      //       {
      //         label: "월별 격리자 현황",
      //         borderColor: "#75b67a",
      //         fill: false,
      //         data: arr.map((a: any) => a.active),
      //       },
      //     ],
      //   });
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
        {/* <StyledGraph>
          {confirmed && (
            <Bar
              data={confirmed}
              options={[
                {
                  title: {
                    display: true,
                    text: "누적 확진자 추이",
                    fontSize: 25,
                  },
                },
                { legend: { display: true, position: "bottom" } },
              ]}
            />
          )}
        </StyledGraph>
        <StyledGraph>
          <Line
            data={quaranted}
            options={[
              {
                title: {
                  display: true,
                  text: "월별 격리자 현황",
                  fontSize: 25,
                },
              },
              { legend: { display: true, position: "bottom" } },
            ]}
          />
        </StyledGraph> */}
      </Container>
    </>
  );
};

export default KoreaCovidState;
