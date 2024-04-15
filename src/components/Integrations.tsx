"use client";

import InView from "./InView";
import IconVector from "../assets/vector.svg";
import IconSlack from "../assets/slack.svg";
import IconGGDrive from "../assets/g-drive.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const IntegrationsContent = () => {
  return (
    <section className="flex min-h-64 justify-center items-center  bg-gray-50 bg-center bg-no-repeat">
      <div className="responsive-container container flex flex-col items-center justify-center gap-10 pt-20 lg:gap-8 lg:py-0 lg:pt-0">
        <InView animateClassName="animate-fade-up">
          <div className="flex items-center justify-center flex-col py-20 px-14">
            <span className="text-primary text-[16px]">Integrations</span>
            <h1 className="text-gray-900 text-[60px] font-semibold text-center ">
              Get more value from your tools
            </h1>
            <p className="text-[20px] font-[400] text-gray-600 text-center ">
              Connect your tools, connect your teams. With over 200 apps already
              available in our directory, your team’s favourite tools are just a
              click away.
            </p>
          </div>
        </InView>
        <div className="flex gap-4">
          <Image src={IconVector} />
          <Image src={IconSlack} />
          <Image src={IconGGDrive} />
        </div>

        <div>
          <button className="rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white transition-all hover:bg-primary/70">
            View all integrations
          </button>
        </div>
      </div>
    </section>
  );
};
export default IntegrationsContent;
