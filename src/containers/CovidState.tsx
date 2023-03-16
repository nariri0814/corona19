import { RightOutlined } from "@ant-design/icons";

import { CountryQuery } from "../modules/apis/CountryQuery";

import { TotalState } from "./TotalState";
import { ConfirmedGraph } from "./ConfirmedGraph";

import { useRouter } from "../hooks/useRouter";

import { StyledDetail } from "../styles/StyledComponents";

const CovidState = () => {
  const { isLoading, isError, data } = CountryQuery();
  const { routeTo } = useRouter();

  return (
    <>
      {data && !isLoading && !isError && (
        <>
          <TotalState data={data.data} />
          <ConfirmedGraph data={data.data} />
          <StyledDetail>
            <div className="link-to" onClick={() => routeTo("countryDetail")}>
              지역별 현황 자세히 보기
              <RightOutlined />
            </div>
          </StyledDetail>
        </>
      )}
    </>
  );
};

export default CovidState;
