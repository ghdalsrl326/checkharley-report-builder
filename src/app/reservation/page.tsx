import React from "react";
import Image from "next/image";
import ReservationForm from "@/components/reservation/ReservationForm";

export const metadata = {
  title: "체크할리 | CheckHarley - 점검 예약하기",
  description: "간단한 절차로 할리데이비슨 점검을 예약하세요.",
};

const ReservationPage = () => {
  return (
    <section className="flex flex-col items-center py-16 md:h-screen relative md:flex-row ">
      <div className="flex flex-col justify-center gap-8 md:relative px-6 md:pl-28 md:z-10">
        <h1 className="text-3xl md:text-5xl font-bold">점검 예약하기</h1>
        <h2 className="text-lg font-medium">
          {`체크할리가 판매자에게 점검 동의를 구한 후 보고서를 작성해 고객님에게 보내드립니다`}
        </h2>
        <ReservationForm />
      </div>
      <div className="hidden md:block">
        <Image
          fill
          className="md:absolute top-0 left-0 pl-96"
          src="/images/reservation/reservation-background.png"
          alt="reservation-background"
          style={{ objectFit: "cover", objectPosition: "left" }}
          quality={100}
        />
      </div>
    </section>
  );
};

export default ReservationPage;
