import { ReactNode } from "react";

type Props = {
  title: string;
  subTitle?: string;
  imgSrc: string;
  children?: ReactNode;
};

const ImageOverlayHero = ({ title, subTitle, imgSrc, children }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(#00000088, #00000088), linear-gradient(#0B3142AA, #0B3142AA), url(${imgSrc})`,
      }}
      className="relative after:-z-10 after:absolute after:inset-0 after:content-[''] place-content-center grid bg-cover bg-no-repeat after:backdrop-blur-sm min-h-[50svh] text-white isolate"
    >
      <h2 className="mb-5 font-extrabold text-5xl text-center">{title}</h2>
      <p className="mb-5 text-center">{subTitle}</p>
      {Boolean(children) && <div>{children}</div>}
    </div>
  );
};

export default ImageOverlayHero;
