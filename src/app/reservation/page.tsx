import React from "react";
import Image from "next/image";
import ReservationForm from "@/components/reservation/ReservationForm";

const ReservationPage = () => {
  return (
    <section className="flex items-center h-screen relative">
      <div className="inline-flex flex-col justify-center gap-8 relative h-screen pl-28 z-10">
        <h1 className="text-5xl font-bold">점검 예약하기</h1>
        <h2 className="text-lg font-medium">
          체크할리 정비사가 판매자에게 점검 동의를 구한 후<br />
          보고서를 작성해 고객님에게 보내드립니다
        </h2>
        <ReservationForm />
      </div>
      <div className="">
        <Image
          fill
          className="absolute top-0 left-0 pl-96"
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
