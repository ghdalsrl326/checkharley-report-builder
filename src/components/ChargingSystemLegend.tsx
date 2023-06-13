import React from "react";
import Image from "next/image";

const ChargingSystemLegend = () => {
  return (
    <>
      <div className="flex flex-row gap-2 items-baseline">
        <Image
          src={`./images/dot_normal.svg`}
          alt="dot_normal"
          width={12}
          height={12}
        />
        <h4 className="mt-8 mb-4">정상범위</h4>
      </div>
      <div className="flex flex-row gap-2 items-baseline">
        <Image
          src={`./images/dot_good.svg`}
          alt="dot_good"
          width={12}
          height={12}
        />
        <h4 className="mt-8 mb-4">이상없음</h4>
      </div>
      <div className="flex flex-row gap-2 items-baseline">
        <Image
          src={`./images/dot_wrong.svg`}
          alt="dot_wrong"
          width={12}
          height={12}
        />
        <h4 className="mt-8 mb-4">이상있음</h4>
      </div>
    </>
  );
};

export default ChargingSystemLegend;
