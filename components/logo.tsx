import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={"/assets/logo.png"}
        alt="Fit Physique Logo"
        width={117}
        height={55}
      />
    </Link>
  );
};
