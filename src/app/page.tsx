import Image from "next/image";
import { notoSerif, notoSans, notoSansKR } from "@/app/fonts";
import RecommendationItem from "@/components/home/RecommendationItem";
import Link from "next/link";

// SSR
export default function Home() {
  return (
    <main className={notoSerif.className}>
      <section className="relative h-screen">
        <Image
          fill
          className="absolute top-0 left-0"
          src="/images/home/home-background-1.png"
          alt="home-background-1"
          style={{ filter: "brightness(0.7)", objectFit: "cover" }}
          quality={100}
        />
        <div className="flex flex-col w-full h-screen justify-center gap-7 pl-28">
          <div className="z-10 text-[100px] font-semibold text-white">
            <h1>
              Check
              <br />
              Your Harley
            </h1>
          </div>
          <h3 className="z-10 text-2xl font-medium text-white">
            중고 할리데이비슨 거래의 합리적인 선택, 체크할리와 함께하세요
          </h3>
          <div className="flex flex-row gap-2">
            <Link
              className="z-10 text-white bg-black h-14 w-40 inline-flex items-center justify-center"
              href={"/reservation"}
            >
              점검예약 바로가기
            </Link>
            <a
              href="https://www.youtube.com/@checkharley"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 text-white bg-black h-14 w-40 inline-flex items-center justify-center"
            >
              유튜브 보러가기
            </a>
          </div>
        </div>
      </section>
      <section className="relative flex h-screen">
        <div className="w-1/2 relative h-[902px]">
          <Image
            fill
            className="absolute top-0 left-0 h-full w-full"
            src="/images/home/home-background-2.png"
            alt="home-background-2"
            style={{ objectFit: "cover", objectPosition: "right" }}
            quality={100}
          />
        </div>
        <div className="flex flex-col w-1/2 h-screen justify-center gap-4 ml-14">
          <div className="flex w-full items-center gap-x-4">
            <h1 className="z-10 text-[80px] font-semibold">Check Harley</h1>
            <hr className="flex-grow border-t border-black" />
          </div>
          <div className={notoSans.className}>
            <h2 className="z-10 text-[28px] font-medium">
              중고 할리데이비슨 거래의 합리적인 선택, <br /> 오늘부터 체크할리와
              함께 하세요
            </h2>
            <br />
            <h3 className="z-10 text-[18px] font-medium w-10/12">
              체크할리는 할리데이비슨 코리아 출신 정비사가 정확하게
              검수해드립니다. 검수 후 상세한 내용의 점검 리포트 파일을
              제공해드립니다. 국내 유일 할리데이비슨 중고거래 전문 서비스를
              경험해보세요. 간단한 정보입력만으로 중고 할리데이비슨 검수 신청이
              가능합니다.
            </h3>
            <Link
              href={"/report-preview"}
              className="z-10 text-[18px] font-medium w-10/12 mt-10 underline"
            >
              {"점검 리포트 미리보기 >"}
            </Link>
          </div>
        </div>
      </section>
      <section className="relative h-screen text-white">
        <Image
          fill
          className="absolute top-0 left-0 w-full h-full"
          src="/images/home/home-background-3.png"
          alt="home-background-3"
          style={{ objectFit: "cover", filter: "brightness(0.7)" }}
          quality={100}
        />
        <div className={notoSansKR.className}>
          <div className="flex flex-col w-full h-screen justify-center gap-4 pl-28">
            <h1 className="text-5xl font-semibold z-10">
              이런 분들께 추천드려요
            </h1>
            <hr className="z-10" />
            <RecommendationItem
              number="01"
              title="전문성 있는 의견을 구하기 어려운 환경이에요"
              description="전문성 있는 의견을 구하기 어려운 환경이에요에 대한 고민을 어떻게 해결해줄 수 있는지에 대해 작성하는 문구영역"
            />
            <RecommendationItem
              number="02"
              title="허위매물인지 판단이 어려워요"
              description="허위매물인지 판단이 어려워요에 대한 고민을 어떻게 해결해줄 수 있는지에 대해 작성하는 문구영역"
            />
            <RecommendationItem
              number="03"
              title="중고거래 경험이 처음이에요"
              description="중고거래 경험이 처음이에요에 대한 고민을 어떻게 해결해줄 수 있는지에 대해 작성하는 문구영역"
            />
          </div>
        </div>
      </section>
      <section className="relative flex bg-white">
        <div className="flex flex-col w-full relative pl-28">
          <h1 className="z-10 text-[80px] font-semibold mt-10">
            Check Harley Process
          </h1>
          <span className={notoSansKR.className}>
            <h2 className="text-2xl font-light mb-8">
              체크할리 검수 프로세스 설명문구를 작성하는 영역임
            </h2>
            <Image
              src="/images/home/home-background-4.png"
              alt="home-background-4"
              layout="responsive"
              width={1725}
              height={868}
              style={{ objectFit: "cover", objectPosition: "right" }}
              quality={100}
            />
            <div className="flex flex-row mt-14 mb-1 text-2xl font-medium">
              <h2 className="flex-1">1.예약포멧 제출</h2>
              <h2 className="flex-1">2.점검일정 조율</h2>
              <h2 className="flex-1">3.점검진행</h2>
              <h2 className="flex-1">4.점검리포트 전달</h2>
            </div>
            <hr className="flex-grow border-t border-black" />
            <div className="flex flex-row mt-4">
              <h2 className="flex-1 overflow-hidden text-overflow-ellipsis whitespace-nowrap">
                예약포멧 제출에 대한 문구를 작성하는 영역임
              </h2>
              <h2 className="flex-1 overflow-hidden text-overflow-ellipsis whitespace-nowrap">
                점검일정 조율에 대한 문구를 작성하는 영역임
              </h2>
              <h2 className="flex-1 overflow-hidden text-overflow-ellipsis whitespace-nowrap">
                점검진행에 대한 문구를 작성하는 영역임
              </h2>
              <h2 className="flex-1 overflow-hidden text-overflow-ellipsis whitespace-nowrap">
                리포트 전달에 대한 문구를 작성하는 영역임
              </h2>
            </div>
          </span>
        </div>
      </section>
      <section className="relative flex bg-white mt-40 mb-32 justify-around">
        <div className="flex flex-col w-1/3 gap-6 relative">
          <h1 className="text-5xl font-semibold leading-snug">
            할리데이비슨 코리아 <br />
            출신 전문 정비사가 도와드려요
          </h1>
          <span className="flex flex-row gap-4 items-baseline">
            <h2 className="text-2xl font-semibold">최상열</h2>
            <h3 className="text-xl">정비사</h3>
          </span>
          <div className="flex flex-col gap-4 text-lg font-normal">
            <li>공식서비스팀 경력 포함 총 6년 경력</li>
            <p className="pl-6">
              2017-2021 할리데이비슨 코리아 서비스팀 근무 ㅣ 주임 <br />
              2021-현재 아지트 모터사이클 정비팀 근무 ㅣ 과장 재직
            </p>
            <li>점검항목</li>
            <p className="pl-6">
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
        <div className="relative w-1/2 bottom-[-300px]">
          <Image
            fill
            className="absolute z-10 "
            src="/images/home/home-background-8.png"
            alt="home-background-8"
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
      </section>
      <section className="relative w-screen h-[70vh]">
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
