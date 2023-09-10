import React from "react";
import Image from "next/image";
import { EvaluationInfo } from "@/data/report.type";
import MarkdownViewer from "@/components/report/MarkdownViewer";

const EvaluationInfo = ({ evaluationComment }: EvaluationInfo) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-left w-10/12">
        <h3 className="text-2xl mt-4 mb-5">총평</h3>
      </div>
      <div className="flex flex-row justify-between w-10/12">
        <section className="flex flex-col w-1/2">
          <MarkdownViewer content={evaluationComment} />
        </section>
        <section className="w-6/12"></section>
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
