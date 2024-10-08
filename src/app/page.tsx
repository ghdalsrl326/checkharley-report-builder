import Image from "next/image";
import { notoSerif, notoSans, notoSansKR } from "@/app/fonts";
import RecommendationItem from "@/components/home/RecommendationItem";
import Link from "next/link";
import { URL } from "@/data/constant";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className={notoSerif.className}>
      <section className="relative h-screen">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-none"
          src="https://www.youtube.com/embed/wWsqROfpuqc?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&start=2&playlist=wWsqROfpuqc"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ filter: "brightness(0.3)" }}
        ></iframe>
        <div className="flex flex-col w-full h-screen justify-center gap-7 px-4 md:pl-28">
          <div className="z-10 leading-normal text-5xl md:text-[100px] font-semibold text-white">
            <h1>
              Check
              <br />
              Your Harley
            </h1>
          </div>
          <h3 className="z-10 text-xl md:text-2xl font-medium text-white">
            중고 할리데이비슨 거래의 합리적인 선택, 체크할리와 함께하세요
          </h3>
          <div className="flex flex-row gap-2">
            <Link
              className="z-10 text-white bg-[#FF3C00] h-14 w-40 inline-flex items-center justify-center"
              href={URL.RESERVATION}
            >
              점검예약 바로가기
            </Link>
            <a
              href="https://www.youtube.com/@checkharley"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 text-white bg-[#FF3C00] h-14 w-40 inline-flex items-center justify-center"
            >
              유튜브 보러가기
            </a>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col md:flex-row h-screen">
        <div className="flex flex-col w-full md:w-1/2 h-screen justify-center gap-4 pl-4 md:pl-14">
          <div className="flex w-full items-center gap-x-4">
            <h1 className="z-10 text-4xl leading-normal md:text-[80px] font-semibold">
              Check Harley
            </h1>
            <hr className="flex-grow border-t border-black" />
          </div>
          <div className={notoSans.className}>
            <h2 className="z-10 text-[18px] md:text-[28px] md:font-medium">
              중고 할리데이비슨 거래의 합리적인 선택, <br /> 오늘부터 체크할리와
              함께 하세요
            </h2>
            <br />
            <h3 className="z-10 text-[12px] md:text-[18px] md:font-medium w-10/12">
              {`체크할리는 할리데이비슨 코리아 출신 정비사가 정확하게 검수해드립니다. 
              검수 후 상세한 내용의 점검 리포트 파일을 제공해드립니다.
              국내 유일 중고 할리데이비슨 전문 컨설팅 서비스를 경험해보세요.`}
            </h3>
            <br />
            <Link
              href={URL.REPORT_PREVIEW}
              className="z-10 text-[18px] font-medium w-10/12 mt-10 underline"
            >
              {"점검 리포트 미리보기 >"}
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-screen md:order-first">
          <Image
            fill
            className="absolute top-0 left-0 h-full w-full"
            src="/images/home/home-background-2-new.png"
            alt="home-background-2"
            style={{ objectFit: "contain", objectPosition: "left bottom" }}
            quality={100}
          />
        </div>
      </section>
      <section className="relative h-screen text-white">
        <Image
          fill
          className="absolute top-0 left-0 w-full h-full"
          src="/images/home/home-background-3.png"
          alt="home-background-3"
          style={{ filter: "brightness(0.7)", objectFit: "cover" }}
          quality={100}
        />
        <div className={notoSansKR.className}>
          <div className="flex flex-col w-full h-screen justify-center gap-4 px-4 md:pl-28">
            <h1 className="text-2xl md:text-5xl font-semibold z-10">
              이런 분들께 추천드려요
            </h1>
            <hr className="z-10" />
            <RecommendationItem
              number="01"
              title="전문성 있는 의견을 구하기 어려운 환경이에요"
              description="지금까지 동호회나 지인들에게 부탁하셨나요? 이젠 할리 데이비슨 코리아 출신 정비사에게 맡겨보세요."
            />
            <RecommendationItem
              number="02"
              title="허위매물인지 판단이 어려워요"
              description="전문가가 직접 허위 매물 여부를 판단해드립니다. 점검에 동행하셔도 됩니다."
            />
            <RecommendationItem
              number="03"
              title="중고거래 경험이 처음이에요"
              description="필수 서류부터 커스텀 옵션까지 최소 25가지 항목을 점검해드립니다. 중고 거래의 합리적인 선택을 도와드리겠습니다."
            />
          </div>
        </div>
      </section>
      <section className="relative h-screen flex flex-col md:flex-row">
        <div className="flex flex-col justify-center w-full relative pl-4 md:pl-28">
          <h1 className="z-10 text-[40px] md:text-[80px] font-semibold">
            Check Harley Process
          </h1>
          <span className={notoSansKR.className}>
            <h2 className=" text-[14px] md:text-2xl font-light mb-8">
              간단한 예약 절차로 점검을 신청하세요
            </h2>
            <div className="flex flex-col gap-y-6 md:flex-row text-[14px] md:text-[24px] font-medium">
              <div className="flex-1">
                <h2 className="text-6xl text-[#F6F6F6]">01</h2>
                <h2 className="pl-4">예약포멧 제출</h2>
              </div>
              <div className="flex-1">
                <h2 className="text-6xl text-[#F6F6F6]">02</h2>
                <h2 className="pl-4">점검일정 조율</h2>
              </div>
              <div className="flex-1">
                <h2 className="text-6xl text-[#F6F6F6]">03</h2>
                <h2 className="pl-4">점검진행</h2>
              </div>
              <div className="flex-1">
                <h2 className="text-6xl text-[#F6F6F6]">04</h2>
                <h2 className="pl-4">점검리포트 전달</h2>
              </div>
            </div>
          </span>
        </div>
      </section>
      <section className="relative flex flex-col md:flex-row bg-[#F3F3F3] justify-center">
        <div className="flex flex-col w-full px-4 py-24 md:px-28 md:w-[70%] gap-6 relative">
          <h1 className=" text-[24px] md:text-5xl font-semibold leading-snug">
            할리데이비슨 코리아 출신
            <br />
            전문 정비사가 도와드려요
          </h1>
          <span className="flex flex-row gap-4 items-baseline">
            <h2 className="text-lg md:text-2xl font-semibold">최상열</h2>
            <h3 className="text-base md:text-xl">정비사</h3>
          </span>
          <hr className="border-t border-black" />
          <div className="flex flex-col gap-4 font-normal">
            <h2 className="text-center w-fit text-[14px] px-4 bg-[#E73802] text-white md:text-lg">
              공식서비스팀 경력 포함 총 6년 경력
            </h2>
            <p className="pl-6 text-[12px] md:text-lg">
              2017-2021 할리데이비슨 코리아 서비스팀 근무 ㅣ 주임 <br />
              2021-현재 아지트 모터사이클 정비팀 근무 ㅣ 과장 재직
            </p>
            <h2 className="text-center w-fit text-[14px] px-4 bg-[#E73802] text-white md:text-lg">
              점검항목
            </h2>
            <p className="pl-6 text-[12px] md:text-lg">
              서류 기본사항 | 폐지증명서, 자동차 양도증명서/도장, 열쇠 개수 등
              <br /> <br />
              소모품 체크 | 오일(엔진오일, 미션오일, 브레이크 오일), 타이어,
              브레이크, 기타(벨트텐션, 클러치 레버, F브레이크 레버, R브레이크
              레버, 스파크 플러그) 등
              <br /> <br />
              충전 시스템 점검 | 최초 배터리 전압, 충전 접압, 엔진 쿨다운
              전압회복, 육안 검사 등
              <br /> <br />
              도장 도막 측정 | F 휀다, R 휀다, 연료탱크, 사이드 커버, 새들백 등
              <br /> <br />
              악세사리 / 튜닝용품 검진 및 튜닝 여부 확인
            </p>
          </div>
        </div>
        <div className="hidden md:block relative w-full h-[344px] md:h-[730px] md:w-1/2 md:bottom-[-300px]">
          <Image
            fill
            className="absolute z-10 "
            src="/images/home/home-background-8-new.png"
            alt="home-background-8"
            style={{ objectFit: "contain" }}
            quality={100}
          />
        </div>
      </section>
      <section className="hidden md:block relative w-screen h-[70vh] ">
        <Image
          fill
          className="absolute top-0 left-0"
          src="/images/home/home-background-7.png"
          alt="home-background-7"
          style={{ filter: "brightness(0.1)", objectFit: "cover" }}
          quality={100}
        />
      </section>
    </main>
  );
}
