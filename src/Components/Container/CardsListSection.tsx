import Container from "@Component/Container/Cards";
import ContainerBgObject from "@Component/Container/ContainerBgObject";
import Link from "next/link";
import { ReactNode } from "react";

const ArrowIcon = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.66656 10.8181C1.66656 10.5306 1.8999 10.2973 2.1874 10.2973L15.7066 10.2973L10.3641 5.04313C10.3131 4.99573 10.2721 4.93858 10.2435 4.87507C10.215 4.81156 10.1995 4.74296 10.1979 4.67335C10.1963 4.60373 10.2087 4.53451 10.2344 4.46977C10.26 4.40503 10.2984 4.34609 10.3472 4.29644C10.396 4.24678 10.4543 4.20742 10.5186 4.18068C10.5829 4.15394 10.6519 4.14036 10.7215 4.14076C10.7911 4.14115 10.86 4.1555 10.924 4.18296C10.988 4.21042 11.0458 4.25043 11.0941 4.30063L17.3391 10.4419L17.3503 10.4527C17.4044 10.5075 17.4457 10.5737 17.4711 10.6464C17.4964 10.7191 17.5053 10.7966 17.497 10.8731C17.4839 10.9984 17.4257 11.1147 17.3332 11.2002L11.0941 17.3352C11.0458 17.3854 10.988 17.4254 10.924 17.4529C10.86 17.4803 10.7911 17.4947 10.7215 17.4951C10.6519 17.4955 10.5829 17.4819 10.5186 17.4552C10.4543 17.4284 10.396 17.3891 10.3472 17.3394C10.2984 17.2898 10.26 17.2308 10.2344 17.1661C10.2087 17.1013 10.1963 17.0321 10.1979 16.9625C10.1995 16.8929 10.215 16.8243 10.2435 16.7608C10.2721 16.6973 10.3131 16.6401 10.3641 16.5927L15.7066 11.3385L2.1874 11.3385C1.8999 11.3385 1.66656 11.106 1.66656 10.8181Z"
      fill="currentColor"
    />
  </svg>
);

export type CardListItemProps = {
  href: string;
  icon?: ReactNode;
  title?: ReactNode;
  details?: ReactNode;
  linkText?: ReactNode;
};
const CardListItem = ({
  href = "#",
  details,
  icon,
  linkText,
  title,
}: CardListItemProps) => (
  <Link
    href={href}
    className="flex-1 border-mainGreen grid bg-white p-10 border rounded-xl min-w-60 shade-xl-textGrey"
  >
    {icon && <div className="mb-6">{icon}</div>}
    {title && <h4 className="mb-2.5 font-semibold">{title}</h4>}
    {details && <p className="text-sm">{details}</p>}
    {linkText && (
      <button
        type="button"
        className="flex items-center gap-1 hover:gap-1.5 mt-6 border-none font-medium text-primary text-sm hover:text-primaryHover transition-all ease-out"
      >
        <span>{linkText}</span>
        <ArrowIcon />
      </button>
    )}
  </Link>
);

type Props = {
  title?: ReactNode;
  subTitle?: ReactNode;
  cardList: CardListItemProps[];
};
const CardListSection = ({ title, subTitle, cardList }: Props) => (
  <Container className="py-20" containerClassName="relative bg-mainGreen">
    <ContainerBgObject className="right-0 left-auto" />
    <ContainerBgObject className="top-auto bottom-0 rotate-180" />
    <div className="mx-auto w-fit">
      {title && (
        <h3 className="font-bold text-3xl text-center text-white">{title}</h3>
      )}
      {subTitle && (
        <p className="mx-auto mt-4 max-w-xl font-light text-center text-white">
          {subTitle}
        </p>
      )}
      <div className="flex flex-wrap justify-center items-stretch gap-8 mx-auto mt-14 w-fit">
        {cardList.map((itm, idx) => (
          <CardListItem key={idx} {...itm} />
        ))}
      </div>
    </div>
  </Container>
);

export default CardListSection;
