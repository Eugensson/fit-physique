import Link from "next/link";
import { IconType } from "react-icons";

interface SocialsProps {
  socialList: { icon: IconType; link: string }[];
  containerStyles?: string;
  linkStyles?: string;
  iconStyles?: string;
}

export const Socials = ({
  socialList,
  containerStyles,
  linkStyles,
  iconStyles,
}: SocialsProps) => {
  return (
    <ul className={containerStyles}>
      {socialList.map(({ icon: Icon, link }, index) => (
        <li key={index}>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${link}`}
            className={linkStyles}
          >
            <Icon className={iconStyles} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
