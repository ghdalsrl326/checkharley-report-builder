import React from "react";
import Image from "next/image";

type Props = {
  mechanic: string;
};

const Footer = ({ mechanic }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="w-10/12"
        src={`/images/line_8.svg`}
        alt={"line_8"}
        width={760}
        height={31}
      />
      <div className="w-10/12 text-center mt-9">
        <h2 className="text-lg mb-6">
          본 검수 결과는 체크할리에서 규정하는 검수 기준으로 자동차의 상태를
          진단한 것입니다.
          <br />
          본 검수 리포트는 중고차량의 상태를 제 3자의 입장에서 평가하기 위한
          목적으로 제작되었습니다.
          <br />
          따라서 이 자료는 차량 구매를 위한 참고 자료로 활용될 수 있으나, 최종
          구매결정과 책임은 구매자에게 있습니다.
        </h2>
        <h1 className="text-lg font-bold">
          본 리포트는 {mechanic} 정비사가 검수를 진행하고, 체크할리가
          발급하였습니다.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
