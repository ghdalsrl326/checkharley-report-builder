import AuthContext from "@/context/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import SWRConfigContext from "@/context/SWRConfigContext";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "체크할리 | CheckHarley - 점검 리포트",
  description: "할리 데이비슨 전문 정비사의 점검 리포트를 확인하세요.",
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
