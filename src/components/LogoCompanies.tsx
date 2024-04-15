import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import IconLogo1 from "../assets/logo-company-1.svg";
import IconLogo2 from "../assets/logo-company-2.svg";
import IconLogo3 from "../assets/logo-company-3.svg";
import IconLogo4 from "../assets/logo-company-4.svg";
import IconLogo5 from "../assets/logo-company-5.svg";
const LOGOS = [
  {
    icon: <Image alt="image" src={IconLogo1} />,
  },
  {
    icon: <Image alt="image" src={IconLogo2} />,
  },
  {
    icon: <Image alt="image" src={IconLogo3} />,
  },
  {
    icon: <Image alt="image" src={IconLogo4} />,
  },
  {
    icon: <Image alt="image" src={IconLogo5} />,
  },
];

const Logo = () => {
  return (
    <div className="grid min-h-14 animate-infinite-scroll grid-cols-2 items-center gap-16 pr-16 md:grid-cols-4 lg:grid-flow-col lg:grid-cols-none">
      {LOGOS.map((logo, li) => {
        const isFourth = li === 4;
        return (
          <div
            key={["logo", li].join("-")}
            className={twMerge(
              "flex max-h-7 justify-center transition-all hover:scale-110",
              isFourth && "md:col-start-2"
            )}
          >
            {logo.icon}
          </div>
        );
      })}
    </div>
  );
};

const Loop = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className="absolute w-full -translate-y-full translate-x-full">
        {children}
      </div>
    </>
  );
};

const LogoCompanies = () => {
  return (
    <div className="flex justify-center bg-gray-50  w-full py-4">
      <div className="responsive-container container">
        <div className="flex justify-center ">
          <span className="text-center text-gray-600 text-[16px]">
            Join 4,000+ companies already growing
          </span>
        </div>
        <div className="relative overflow-hidden  py-6 w-full">
          <Loop>
            <Logo />
          </Loop>
        </div>
      </div>
    </div>
  );
};

export default LogoCompanies;
