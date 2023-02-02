import axios from "axios";
import { useQuery } from "react-query";

export const CountryQuery = () => {
  const { isLoading, isError, data } = useQuery("country", () =>
    axios.get(
      "https://api.corona-19.kr/korea/country/new/?serviceKey=H9cBn51QJlgePUFziKA6wqD3kXST48WEO"
    )
  );
  return {
    isLoading,
    isError,
    data,
  };
};
