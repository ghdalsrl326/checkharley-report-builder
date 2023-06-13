import React from "react";
import { MdPlayArrow as RightArrowIcon } from "react-icons/md";

type Props = {
  title: string;
  measure: string;
  condition: string;
  variant?: "chargingSystem" | "painting" | "tuning";
};

const AccordionItem = ({ title, measure, condition, variant }: Props) => {
  if (variant === "chargingSystem") {
    return (
      <span className="flex flex-row items-center justify-between w-full aspect-[14/1] pl-8 pr-8 rounded-xl bg-gray-800/5 object-contain text-lg text-black">
        <h4 className="font-bold">{title}</h4>
        <div className="w-7/12 flex flex-row items-center justify-between gap-6 font-bold">
          <div className="w-4/5">
            {(title === "최초 배터리 전압" ||
              title === "엔진 쿨다운(15분) 전압 회복") && (
              <>
                <label className="font-light">12.0V~13.0V</label>
                <input
                  className="w-full appearance-none bg-gray-200 rounded-lg"
                  type="range"
                  min="1"
                  max="25"
                  value={measure.replace("V", "")}
                  id={title}
                  disabled
                />
              </>
            )}
          </div>
          <div className="text-center w-24 text-orange-500 bg-white text-xl font-bold border-solid border-[1px] border-orange-500 rounded-[1rem]">
            <p>이상있음</p>
          </div>
        </div>
      </span>
    );
  }

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
