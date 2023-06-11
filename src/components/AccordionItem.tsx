import React from "react";
import { MdPlayArrow as RightArrowIcon } from "react-icons/md";

type Props = {
  title: string;
  measure: string;
  condition: string;
};

const AccordionItem = ({ title, measure, condition }: Props) => {
  return (
    <span className="flex flex-row items-center justify-between w-full aspect-[14/1] pl-8 pr-8 rounded-xl bg-white object-contain text-lg text-black">
      <h4>{title}</h4>
      <div className="flex flex-row items-center justify-between gap-4 font-bold">
        <h4>{measure}</h4>
        <RightArrowIcon />
        {condition === "이상있음" ? (
          <h4 className="text-center text-orange-500 w-20">{condition}</h4>
        ) : (
          <h4 className="text-center text-black w-20">{condition}</h4>
        )}
      </div>
    </span>
  );
};

export default AccordionItem;
