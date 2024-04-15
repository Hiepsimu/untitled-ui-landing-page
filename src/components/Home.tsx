"use client";

import Image from "../../node_modules/next/image";
import ImageMacbook from "../assets/macbook.svg";
import IconPlayCircle from "../assets/play-circle.svg";
import InView from "./InView";

const HomeContent = () => {
  return (
    <section className="flex min-h-dvh justify-center bg-gray-50 bg-center bg-no-repeat">
      <div className="responsive-container container flex flex-col items-center justify-center gap-10 pt-20 lg:gap-8 lg:py-0 lg:pt-0">
        <h1 className="text-gray-900 text-[60px] font-semibold text-center animate-fade-up">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-[20px] font-[400] text-gray-600 text-center animate-fade-up">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex gap-4 animate-fade-up">
          <button className="flex flex-row gap-2 rounded-lg px-6 py-4 text-base font-semibold text-primary ring-primary border-slate-300 border transition-all hover:ring-1">
            <Image src={IconPlayCircle} />
            <span className=" text-gray-600 font-semibold">Demo</span>
          </button>
          <button className="rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white transition-all hover:bg-primary/70">
            Sign Up
          </button>
        </div>
        <div className=" justify-center">
          <InView animateClassName="animate-fade-up">
            <Image src={ImageMacbook} />
          </InView>
        </div>
      </div>
    </section>
  );
};
export default HomeContent;
