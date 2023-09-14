import Image from "next/image";
import { notoSerif, notoSans } from "@/app/fonts";

// SSR
export default function Home() {
  return (
    <main className={notoSerif.className}>
      <section className="relative">
        <Image
          fill
          className="absolute top-0 left-0"
          src="/images/home/home-background-1.png"
          alt="home-background-1"
          style={{ filter: "brightness(0.6)", objectFit: "cover" }}
          quality={100}
        />
        <div className="flex flex-col w-full h-screen justify-center gap-4 ml-28">
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
            <button className="z-10 text-white bg-black h-14 w-40">
              점검예약 바로가기
            </button>
            <button className="z-10 text-white bg-black h-14 w-40">
              Youtube 보러가기
            </button>
          </div>
        </div>
      </section>
      <section className="relative flex">
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
            <h3 className="z-10 text-[18px] font-medium w-10/12 mt-10 underline">
              {"점검 리포트 미리보기 >"}
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
