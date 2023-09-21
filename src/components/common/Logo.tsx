import Image from "next/image";
import Link from "next/link";
import { IMAGE, URL } from "@/data/constant";

type LogoProps = {
  className: string;
  src: string;
  width: number;
  height: number;
};

const Logo = ({ className, src, width, height }: LogoProps) => (
  <Link href={URL.HOME}>
    <div className={className}>
      <Image src={src} alt="Company Logo" width={width} height={height} />
    </div>
  </Link>
);

export default Logo;
