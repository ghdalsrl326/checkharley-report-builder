import React from "react";
import { MdPlayArrow as RightArrowIcon } from "react-icons/md";

type Props = {
  title: string;
  measure: string;
  condition: string;
  variant?: "chargingSystem" | "painting" | "tuning";
};

const AccordionItem = ({ title, measure, condition, variant }: Props) => {
  const backgroundColor =
    variant === "chargingSystem" || "painting" || "tuning"
      ? "bg-gray-100"
      : "bg-white";

  const rangeSubTitle = (title: string): string => {
    if (title === "최초 배터리 전압") {
      return "정상범위 : 12.0V~13.0V";
    } else if (title === "충전 전압") {
      return "정상범위 : 13.0V 이상";
    } else if (title === "엔진 쿨다운(15분) 전압 회복") {
      return "정상범위 : 12.0V~13.0V";
    }
    return "";
  };

  return (
    <span
      className={`flex flex-row items-center justify-between w-full aspect-[14/1] pl-8 pr-8 rounded-xl ${backgroundColor} object-contain text-lg text-black`}
    >
      <div className="flex flex-row gap-4">
        <h4>{title}</h4>
        <h5 className="text-gray-500">{rangeSubTitle(title)}</h5>
      </div>
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
