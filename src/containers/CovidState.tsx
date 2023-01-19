import React, { useState, useEffect } from "react";
import axios from "axios";

import { TotalState } from "./TotalState";

const CovidState = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCovidDatas = async () => {
    setIsLoading(true);
    const data = await axios
      .get(
        "https://api.corona-19.kr/korea/?serviceKey=H9cBn51QJlgePUFziKA6wqD3kXST48WEO"
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
    console.log(data);
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCovidDatas();
  }, []);

  return <>{data && !isLoading && <TotalState data={data} />}</>;
};

export default CovidState;
