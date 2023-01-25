import React, { useEffect } from "react";
// import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const ConfirmedGraph = (props: any) => {
  const { data } = props;
  //   const labeled = Object.keys(data);
  //   for (let i = 0; i < labeled.length; i++) {
  //     if (labeled[i] === "resultCode") {
  //       labeled.splice(i, 1);
  //       i--;
  //     }
  //     if (labeled[i] === "resultMessage") {
  //       labeled.splice(i, 1);
  //       i--;
  //     }
  //     if (labeled[i] === "korea") {
  //       labeled.splice(i, 1);
  //       i--;
  //     }
  //     if (labeled[i] === "quarantine") {
  //       labeled.splice(i, 1);
  //       i--;
  //     }
  //   }
  //   const graphNewcase = Object.entries(data)
  //     .map((v: any) => {
  //       if (v[0] === "korea") return undefined;
  //       if (v[0] === "quarantine") return undefined;
  //       return v[1].newCase;
  //     })
  //     .filter((el) => el !== undefined);

  const graphNewcase = Object.entries(data)
    .map((v: any) => {
      return {
        x: v[1].countryName,
        y: v[1].newCase,
      };
    })
    .filter((el) => el.x !== undefined)
    .filter((el) => el.x !== "합계")
    .filter((el) => el.x !== "검역");
  console.log("@@", graphNewcase);

  const graphData = {
    labels: graphNewcase?.map((v) => v.x),
    datasets: [
      {
        label: "신규 확진자 수(명)",
        data: graphNewcase ?? [],
        backgroundColor: [
          "#fdf8b7",
          "#fcea9f",
          "#ffd9aa",
          "#fbaca5",
          "#fcc9c9",
          "#e5c4dc",
          "#b6d1ec",
          "#cac0db",
          "#b3c8e4",
          "#dcbbdc",
          "#bbe7e7",
          "#b3e0d3",
          "#cfe7b4",
          "#eaeea2",
          "#84a26d",
          "#af6462",
          "#b48eb3",
        ],
        hoverOffset: 2,
        maxBarThickness: 17,
      },
    ],
  };
  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <>
      {graphData && (
        <Bar
          options={{
            plugins: {
              title: {
                display: true,
                text: "지역별 신규확진자 수",
              },
            },
            scales: {
              y: {
                alignToPixels: true,
              },
            },
          }}
          data={graphData}
        />
      )}
    </>
  );
};
