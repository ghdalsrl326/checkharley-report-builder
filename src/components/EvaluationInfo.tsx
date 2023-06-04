import React from "react";
import Image from "next/image";
import { EvaluationInfo } from "@/data/report.type";
import RadarChart from "./RadarChart";
import MarkdownViewer from "./MarkdownViewer";

const EvaluationInfo = ({
  evaluationComment,
  evaluationGrade,
  evaluationExterior,
  evaluationExpendables,
  evaluationElectronics,
  evaluationPainting,
  evaluationEngine,
}: EvaluationInfo) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-left w-10/12">
        <h3 className="text-2xl mt-4 mb-5">총평</h3>
      </div>
      <div className="flex flex-row justify-between w-10/12">
        <section className="flex flex-col w-1/2">
          <MarkdownViewer content={evaluationComment} />
        </section>
        <section className="w-6/12">
          <RadarChart
            evaluationGrade={evaluationGrade}
            evaluationExterior={evaluationExterior}
            evaluationExpendables={evaluationExpendables}
            evaluationElectronics={evaluationElectronics}
            evaluationPainting={evaluationPainting}
            evaluationEngine={evaluationEngine}
          />
        </section>
      </div>
      <Image
        className="w-10/12 mt-20"
        src={`/images/line_8.svg`}
        alt={"line_8"}
        width={760}
        height={31}
      />
    </div>
  );
};

export default EvaluationInfo;
