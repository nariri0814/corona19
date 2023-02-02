import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

import { CountryQuery } from "../modules/apis/CountryQuery";

import { TotalState } from "./TotalState";
import { ConfirmedGraph } from "./ConfirmedGraph";
import { StyledDetail } from "../StyledComponents/StyledComponents";

const CovidState = () => {
  const { isLoading, isError, data } = CountryQuery();

  return (
    <>
      {data && !isLoading && !isError && (
        <>
          <TotalState data={data.data} />
          <ConfirmedGraph data={data.data} />
          <StyledDetail>
            <Link to="/countryDetail">
              지역별 현황 자세히 보기
              <RightOutlined />
            </Link>
          </StyledDetail>
        </>
      )}
    </>
  );
};

export default CovidState;
