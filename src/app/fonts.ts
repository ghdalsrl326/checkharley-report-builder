import {
  Inter,
  Noto_Sans,
  Noto_Sans_Display,
  Noto_Sans_KR,
  Noto_Serif_Display,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const notoSerif = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const notoSansDisplay = Noto_Sans_Display({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
