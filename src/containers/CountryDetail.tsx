import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";

import { CountryQuery } from "../modules/apis/CountryQuery";
import { TCol } from "../modules/models/country.model";

export const CountryDetail = () => {
  const { isLoading, isError, data } = CountryQuery();

  const columns: ColumnsType<TCol> = [
    {
      title: "도시명",
      dataIndex: "countryName",
      key: "countryName",
    },
    {
      title: "신규확진자수",
      dataIndex: "newCase",
      key: "newCase",
      render: (newCase) => {
        return (
          <div style={{ fontWeight: 700, color: "#5673EB" }}>{newCase}</div>
        );
      },
    },
    {
      title: "완치자수",
      dataIndex: "recovered",
      key: "recovered",
    },
    {
      title: "사망자",
      dataIndex: "death",
      key: "death",
      render: (death) => {
        return <div style={{ fontWeight: 700, color: "#EB5374" }}>{death}</div>;
      },
    },
  ];

  let tableData;
  if (!isLoading && !isError && data) {
    tableData = Object.entries(data.data)
      ?.map((v: any) => {
        return {
          countryName: v[1].countryName,
          newCase: v[1].newCase,
          recovered: v[1].recovered,
          death: v[1].death,
          key: v[1].countryName,
        };
      })
      .filter((el) => el.countryName !== undefined)
      .filter((el) => el.countryName !== "합계")
      .filter((el) => el.countryName !== "검역");
  }

  if (isError) {
    window.alert("잠시후 다시 시도해주세요.");
  }

  return (
    <>
      {tableData && (
        <Table
          columns={columns}
          dataSource={tableData}
          style={{ width: "100%" }}
        />
      )}
    </>
  );
};
