// "use client";
// import React, { useState, useEffect } from "react";
// import ReactECharts from "echarts-for-react";
// import { EvaluationInfo } from "@/data/report.type";

// const RadarChart = ({
//   evaluationGrade,
//   evaluationExterior,
//   evaluationExpendables,
//   evaluationElectronics,
//   evaluationPainting,
//   evaluationEngine,
// }: Omit<EvaluationInfo, "evaluationComment">) => {
//   const [option, setOption] = useState({});

//   useEffect(() => {
//     const radarChartOptions = {
//       title: {
//         text: evaluationGrade,
//         textStyle: {
//           fontSize: "4rem",
//           fontWeight: "bold",
//           color: "black",
//         },
//         top: "center",
//         left: "center",
//       },
//       textStyle: {
//         fontSize: "0.875rem",
//         color: "black",
//       },
//       tooltip: {},
//       radar: {
//         indicator: [
//           { name: "외부 상태", min: 0, max: 5 },
//           { name: "소모품", min: 0, max: 5 },
//           { name: "전기장치", min: 0, max: 5 },
//           { name: "도장상태", min: 0, max: 5 },
//           { name: "엔진/파워트레인", min: 0, max: 5 },
//         ],
//         splitArea: {
//           areaStyle: {
//             color: ["#ffffff"],
//           },
//         },
//       },
//       series: [
//         {
//           type: "radar",
//           areaStyle: { color: "#ff602f" },
//           lineStyle: { normal: { width: 0 } },
//           symbol: "none",
//           data: [
//             {
//               value: [
//                 evaluationExterior,
//                 evaluationExpendables,
//                 evaluationElectronics,
//                 evaluationPainting,
//                 evaluationEngine,
//               ],
//               name: "평가 점수 ( * / 5점 )",
//             },
//           ],
//         },
//       ],
//     };
//     setOption(radarChartOptions);
//   }, []);

//   return <ReactECharts option={option} />;
// };

// export default RadarChart;
