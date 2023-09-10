"use client";
import { AccTuningInfo, ExpendablesInfo } from "@/data/report.type";
import React, { useEffect, useState } from "react";
import RingChart from "@/components/report/RingChart";

const SummaryBoard = (props: ExpendablesInfo | AccTuningInfo) => {
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [needCheckCount, setNeedCheckCount] = useState<number>(0);
  const [notApplicableCount, setNotApplicableCount] = useState<number>(0);

  function count(props: ExpendablesInfo | AccTuningInfo) {
    let tempCorrectCount = 0;
    let tempErrorCount = 0;
    let tempNeedCheckCount = 0;
    let tempNotApplicableCount = 0;

    if ("accTuningList" in props) {
      for (const item of props.accTuningList) {
        switch (item.accTuningCondition) {
          case "이상없음":
            tempCorrectCount += 1;
            break;
          case "이상있음":
            tempErrorCount += 1;
            break;
          case "확인필요":
            tempNeedCheckCount += 1;
            break;
          case "해당없음":
            tempNotApplicableCount += 1;
            break;
        }
      }
    } else {
      for (const value of Object.values(props)) {
        if (typeof value === "string") {
          switch (value) {
            case "이상없음":
              tempCorrectCount += 1;
              break;
            case "이상있음":
              tempErrorCount += 1;
              break;
            case "확인필요":
              tempNeedCheckCount += 1;
              break;
            case "해당없음":
              tempNotApplicableCount += 1;
              break;
          }
        }
      }
    }

    setCorrectCount(tempCorrectCount);
    setErrorCount(tempErrorCount);
    setNeedCheckCount(tempNeedCheckCount);
    setNotApplicableCount(tempNotApplicableCount);
  }

  useEffect(() => {
    count(props);
  }, [props]);

  return (
    <section className="w-10/12 mb-14">
      <div className="flex flex-row gap-2 items-center mb-6">
        <h4 className="text-2xl text-gray-900 opacity-60">검수 항목</h4>
        <p className="text-xl text-gray-900 opacity-60">{`총 ${
          correctCount + errorCount + needCheckCount + notApplicableCount
        }항목`}</p>
      </div>
      <div className="flex flex-row justify-around gap-12 ">
        <div>
          <RingChart
            correctCount={correctCount}
            errorCount={errorCount}
            needCheckCount={needCheckCount}
            notApplicableCount={notApplicableCount}
          />
        </div>
        <div className="flex flex-col text-left gap-2">
          <h4 className="text-2xl text-black font-bold">{correctCount}</h4>
          <p className="text-2xl text-black font-bold">이상없음</p>
          <p className="text-sm text-gray-900 opacity-60">
            기능/외관상 <br /> 문제점이 없는 경우
          </p>
        </div>
        <div className="flex flex-col text-left gap-2">
          <h4 className="text-2xl text-orange-500 font-bold">{errorCount}</h4>
          <p className="text-2xl text-orange-500 font-bold">이상있음</p>
          <p className="text-sm text-gray-900 opacity-60">
            해당 부분에 <br />
            문제점을 확인한 경우
          </p>
        </div>
        <div className="flex flex-col text-left gap-2">
          <h4 className="text-2xl text-green-500 font-bold">
            {needCheckCount}
          </h4>
          <p className="text-2xl text-green-500 font-bold">확인필요</p>
          <p className="text-sm text-gray-900 opacity-60">
            외관상 문제로 구매자 <br /> 확인이 필요한 경우
          </p>
        </div>
        <div className="flex flex-col text-left gap-2">
          <h4 className="text-2xl text-gray-500 font-bold">
            {notApplicableCount}
          </h4>
          <p className="text-2xl text-gray-500 font-bold">해당없음</p>
          <p className="text-sm text-gray-900 opacity-60">
            차량에 해당 옵션 및 <br /> 기능이 없는 경우
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummaryBoard;
