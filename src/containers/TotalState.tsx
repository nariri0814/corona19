import React from "react";
import { Badge } from "antd";

import {
  StyledTotalBox,
  TotalContainer,
} from "../StyledComponents/StyledComponents";

export const TotalState = (props: any) => {
  const { data } = props;

  return (
    <>
      {data && (
        <>
          <h3>총 현황</h3>
          <TotalContainer>
            <StyledTotalBox color="#5673EB">
              <p>확진자</p>
              <p className="num">{data.korea?.totalCnt.toLocaleString()}</p>
            </StyledTotalBox>
            <StyledTotalBox color="#EB5374">
              <p>사망자</p>
              <p className="num"> {data.korea?.deathCnt.toLocaleString()}</p>
              <div className="death-per-box">
                <span className="death-per">사망률{"  "}</span>
                <Badge count={data.API?.deathPcnt} showZero color="#EB5374" />
              </div>
            </StyledTotalBox>
            <StyledTotalBox>
              <p>완치자</p>
              <p className="num"> {data.korea?.qurRate}</p>
            </StyledTotalBox>
          </TotalContainer>

          <h3>전일대비 현황</h3>
          <TotalContainer>
            <StyledTotalBox>
              <p>총</p>
              <p className="num">{data.korea?.incDec.toLocaleString()}</p>
            </StyledTotalBox>
            <StyledTotalBox>
              <p>지역 대비</p>
              <p className="num">{data.korea?.incDecK.toLocaleString()}</p>
            </StyledTotalBox>
            <StyledTotalBox>
              <p>해외 대비</p>
              <p className="num">{data.korea?.incDecF.toLocaleString()}</p>
            </StyledTotalBox>
          </TotalContainer>
        </>
      )}
    </>
  );
};
