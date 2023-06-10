"use client";
import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";

const RingChart = ({
  correctCount,
  errorCount,
  needCheckCount,
  notApplicableCount,
}: {
  correctCount: number;
  errorCount: number;
  needCheckCount: number;
  notApplicableCount: number;
}) => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const ringChartOptions = {
      legend: {
        orient: "vertical",
        x: "left",
        data: ["이상없음", "이상있음", "확인필요", "해당없음"],
        show: false,
      },
      series: [
        {
          type: "pie",
          radius: ["80%", "100%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          labelLine: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold",
            },
          },
          data: [
            { value: correctCount, name: "이상없음" },
            { value: errorCount, name: "이상있음" },
            { value: needCheckCount, name: "확인필요" },
            { value: notApplicableCount, name: "해당없음" },
          ],
          color: ["#101010", "#ff602f", "#53d54e", "#878787"],
        },
      ],
    };
    setOption(ringChartOptions);
  }, [correctCount, errorCount, needCheckCount, notApplicableCount]);

  return (
    <ReactECharts option={option} style={{ width: "8rem", height: "8rem" }} />
  );
};

export default RingChart;
