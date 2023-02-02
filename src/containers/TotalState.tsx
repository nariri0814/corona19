// import { Badge } from "antd";

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
              <p className="num">{data.korea?.totalCase.toLocaleString()}</p>
            </StyledTotalBox>
            <StyledTotalBox color="#EB5374">
              <p>사망자</p>
              <p className="num"> {data.korea?.death.toLocaleString()}</p>
              {/* <div className="death-per-box">
                <span className="death-per">사망률{"  "}</span>
                <Badge count={data.API?.deathPcnt} showZero color="#EB5374" />
              </div> */}
            </StyledTotalBox>
            <StyledTotalBox>
              <p>완치자</p>
              <p className="num"> {data.korea?.recovered.toLocaleString()}</p>
            </StyledTotalBox>
            {/* <StyledTotalBox>
              <p>발생률</p>
              <Badge count={data.korea?.percentage} showZero color="#EB5374" />
            </StyledTotalBox> */}
          </TotalContainer>

          <h3>신규확진 현황</h3>
          <TotalContainer>
            <StyledTotalBox>
              <p>총 신규확진</p>
              <p className="num">{data.korea?.newCase.toLocaleString()}</p>
            </StyledTotalBox>
            <StyledTotalBox>
              <p>지역 발생</p>
              <p className="num">{data.korea?.newCcase.toLocaleString()}</p>
            </StyledTotalBox>
            <StyledTotalBox>
              <p>해외 유입</p>
              <p className="num">{data.korea?.newFcase.toLocaleString()}</p>
            </StyledTotalBox>
          </TotalContainer>
        </>
      )}
    </>
  );
};
