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
    const batteryVoltage = parseFloat(measure.replace("V", ""));
    const sliderMinValue = 1;
    const sliderMaxValue = 25;

    const normalRangeWidth =
      ((13 - 12) / (sliderMaxValue - sliderMinValue)) * 100;
    const measurePosition =
      ((batteryVoltage - sliderMinValue) / (sliderMaxValue - sliderMinValue)) *
      100;

    return (
      <span className="flex flex-row items-center justify-between w-full aspect-[14/1] pl-8 pr-8 rounded-xl bg-gray-800/5 object-contain text-lg text-black">
        <h4 className="font-bold">{title}</h4>
        <div className="w-6/12 flex flex-row items-center justify-between gap-6 font-bold">
          <div className="w-4/5">
            {(title === "최초 배터리 전압" ||
              title === "엔진 쿨다운(15분) 전압 회복") && (
              <>
                <div
                  className="w-full bg-gray-200 rounded-lg relative"
                  style={{ height: "1rem" }}
                >
                  <div
                    className="absolute bg-gray-500 rounded-lg"
                    style={{
                      left: "50%",
                      width: `${normalRangeWidth}%`,
                      height: "100%",
                    }}
                  />
                  <div
                    className="absolute bg-orange-500 rounded-lg"
                    style={{
                      left: `${measurePosition}%`,
                      width: "1%",
                      height: "100%",
                    }}
                  />
                </div>
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
