import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { Row } from "antd";
import { Col } from "antd/es/grid";
import Card from "antd/es/card";
import { CovidKoreaTotal } from "../models/covid.model";

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
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCovidDatas = async () => {
    setIsLoading(true);
    const korea = await axios
      .get(
        "https://api.corona-19.kr/korea/?serviceKey=H9cBn51QJlgePUFziKA6wqD3kXST48WEO"
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
    console.log(korea);
    setData(korea);
    setIsLoading(false);
  };

  useEffect(() => {
    getCovidDatas();
  }, []);

  return (
    <>
      {data && (
        <Row gutter={16}>
          {/* 업데이트 시간: */}
          <Col span={8}>
            <Card
              size="small"
              title="확진자"
              bordered={false}
              loading={isLoading}
              bodyStyle={{ color: "#5673EB" }}
            >
              {data.korea?.totalCnt}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              size="small"
              title="사망자"
              bordered={false}
              loading={isLoading}
              bodyStyle={{ color: "#EB5374" }}
            >
              {data.korea?.deathCnt}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              size="small"
              title="발생률"
              bordered={false}
              loading={isLoading}
            >
              {data.korea?.qurRate}
            </Card>
          </Col>
        </Row>
      )}
      {/* <Container>
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
      </Container> */}
    </>
  );
};

export default KoreaCovidState;
