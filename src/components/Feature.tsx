"use client";

import Image from "next/image";
import logoMockupRight from "../assets/screen-mockup-1.svg";
import logoMockupLeft from "../assets/screen-mockup-2.svg";
import logoMockupMobile from "../assets/screen-mockup-mobile.svg";
import check from "../assets/check.svg";
import mail from "../assets/mail.svg";
import graph from "../assets/graph.svg";
import thunder from "../assets/thunder.svg";
import InView from "./InView";

const FeatureContent = () => {
  return (
    <section className="flex min-h-dvh justify-center bg-white bg-center bg-no-repeat">
      <div className="responsive-container container">
        <div className="flex items-center justify-center flex-col py-20">
          <span className="text-primary text-[16px]">Feature</span>
          <h1 className="text-gray-900 text-[60px] font-semibold text-center animate-fade-up">
            Analytics that feels like it’s from the future
          </h1>
          <p className="text-[20px] font-[400] text-gray-600 text-center animate-fade-up">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="w-full flex flex-col  gap-10 lg:gap-8 lg:py-0 lg:pt-0">
          <div className="flex lg:flex-row flex-col justify-between w-full">
            <div className="flex-1 justify-center flex flex-col gap-8">
              <InView animateClassName="md:animate-fade-right animate-fade-up">
                <Image src={mail} />

                <h2 className="text-gray-900 text-[30px] font-semibold">
                  Share team inboxes
                </h2>
                <p>
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
                <div className="flex flex-col pl-4 gap-4">
                  <div className="flex gap-4">
                    <Image src={check} />
                    <span className="text-gray-600 text-[18px] ">
                      Filter, export, and drilldown on the data quickly
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Image src={check} />
                    <span className="text-gray-600 text-[18px] ">
                      Always give customers a human to chat to
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Image src={check} />
                    <span className="text-gray-600 text-[18px] ">
                      Automate customer support and close leads faster
                    </span>
                  </div>
                </div>
              </InView>
            </div>

            <div className="flex-1 flex justify-end h-[616px] hidden lg:block">
              <div className="absolute right-5 md:right-10 lg:right-0 animate-fade-left">
                <InView animateClassName="animate-fade-left">
                  <Image src={logoMockupRight} className="" />
                </InView>
              </div>
            </div>
            <div className="py-4 block lg:hidden">
              <InView animateClassName="animate-fade-up">
                <Image src={logoMockupMobile} />
              </InView>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col  gap-10 lg:gap-8 lg:py-0 lg:pt-0">
          <div className="flex lg:flex-row flex-col justify-between w-full">
            <div className="flex-1 flex justify-end h-[616px] ">
              <div className="absolute left-5 md:left-10 lg:left-0 hidden lg:block">
                <InView animateClassName="animate-fade-right">
                  <Image src={logoMockupLeft} />
                </InView>
              </div>
            </div>
            <div className="flex-1 justify-center flex flex-col gap-8">
              <InView animateClassName="md:animate-fade-left animate-fade-up">
                <Image src={thunder} />

                <h2 className="text-gray-900 text-[30px] font-semibold">
                  Deliver instant answers
                </h2>
                <p>
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
                <div className="flex flex-col pl-4 gap-4">
                  <div className="flex gap-4">
                    <Image src={check} />
                    <span className="text-gray-600 text-[18px] ">
                      Keep your customers in the loop with live chat
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Image src={check} />
                    <span className="text-gray-600 text-[18px] ">
                      Embed help articles right on your website
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Image src={check} />
                    <span className="text-gray-600 text-[18px] ">
                      Customers never have to leave the page to find an answer
                    </span>
                  </div>
                </div>
              </InView>
            </div>
            <div className="py-4 block lg:hidden">
              <InView animateClassName="animate-fade-up">
                <Image src={logoMockupMobile} />
              </InView>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col  gap-10 lg:gap-8 lg:py-0 lg:pt-0">
          <div className="flex lg:flex-row flex-col justify-between items-center w-full">
            <div className="flex-1 justify-center flex flex-col gap-8">
              <InView animateClassName="md:animate-fade-right animate-fade-up">
                <Image src={graph} />

                <h2 className="text-gray-900 text-[30px] font-semibold">
                  Manage your team with reports
                </h2>
                <p>
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple
                  clicks.
                </p>
                <div className="flex flex-col pl-4 gap-4">
                  <div className="flex gap-4">
                    <Image src={check} />
                    <span className="text-gray-600 text-[18px] ">
                      Filter, export, and drilldown on the data quickly
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Image src={check} />
                    <span className="text-gray-600 text-[18px] ">
                      Save, schedule, and automate reports to your inbox
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Image src={check} />
                    <span className="text-gray-600 text-[18px] ">
                      Connect the tools you already use with 100+ integrations
                    </span>
                  </div>
                </div>
              </InView>
            </div>

            <div className="flex-1 flex justify-end  h-[616px] hidden lg:block">
              <div className="absolute right-5 md:right-10 lg:right-0 ">
                <InView animateClassName="animate-fade-left">
                  <Image src={logoMockupRight} />
                </InView>
              </div>
            </div>
            <div className="py-4 block lg:hidden">
              <InView animateClassName="animate-fade-up">
                <Image src={logoMockupMobile} />
              </InView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureContent;
