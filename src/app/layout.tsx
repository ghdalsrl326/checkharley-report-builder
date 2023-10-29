import AuthContext from "@/context/AuthContext";
import "./globals.css";
import SWRConfigContext from "@/context/SWRConfigContext";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { inter } from "@/app/fonts";

export const metadata = {
  title:
    "체크할리 | CheckHarley - 할리데이비슨, 중고로 구매할 땐 체크할리로 체크하세요",
  description: "할리 데이비슨 전문 정비사의 꼼꼼한 중고 검수 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <AuthContext> */}
        <Header />
        <SWRConfigContext>{children}</SWRConfigContext>
        <Footer />
        {/* </AuthContext> */}
      </body>
    </html>
  );
}
