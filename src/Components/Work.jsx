import React from "react";
import youtube from "../assets/youtube.svg";
import gitBook from "../assets/gitBook.svg";
import join from "../assets/join.svg";

const Work = () => {
  return (
    <section
      className="pt-14 md:pt-32 pb-24 w-full relative  text-white"
      id="work"
    >
      <div className="container gap-16 grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <article className="flex flex-col gap-10">
          <h1 className="text-3xl font-bold capitalize">project development</h1>
          <div className=" flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 p-1 bg-green-500 rounded justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
              </div>
              <div className="text-white text- font-normal leading-loose tracking-tight">
                Market Research{" "}
              </div>
            </div>
            <div className=" justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 p-1 bg-green-500 rounded justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
              </div>
              <div className="text-white text- font-normal leading-loose tracking-tight">
                Utopia Bot Development V0.1 (ALPHA Stage)
              </div>
            </div>
            <div className=" justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 p-1 bg-green-500 rounded justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
              </div>
              <div className="text-white text- font-normal leading-loose tracking-tight">
                Testing & Debugging (BETA Stage)
              </div>
            </div>
            <div className=" justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 p-1 bg-green-500 rounded justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
              </div>
              <div className="text-white text- font-normal leading-loose tracking-tight">
                Brand Design
              </div>
            </div>
            <div className=" justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 p-1 bg-green-500 rounded justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
              </div>
              <div className="text-white text- font-normal leading-loose tracking-tight">
                Tokenomics Design
              </div>
            </div>
            <div className=" justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 p-1 bg-green-500 rounded justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
              </div>
              <div className="text-white text- font-normal leading-loose tracking-tight">
                Marketing Plan
              </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 p-1 bg-green-500 rounded justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
              </div>
              <div className="text-white text- font-normal leading-loose tracking-tight">
                Website Launch (V1 Minimal functionality)
              </div>
            </div>
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="w-6 h-6 p-1 bg-green-500 rounded justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
              </div>
              <div className="grow shrink basis-0 text-white text- font-normal leading-loose tracking-tight">
                Marketing (Socials) Utopia Bot Launch V1.0 (Public Version)
                Launch $UB (Uniswap V2) Launch Utopia DAO (Web & Tg
                implementation) Website - Claim Page First Scheduled Update v1.1
                First DAO Update Integrating Bot Updates based on DAO feedback
              </div>
            </div>
          </div>
        </article>

        <a
          href="https://www.youtube.com/@utopiabot"
          className="w-[269px] mx-auto h-[301px] pl-[44.12px] pr-[44.88px] pt-[78px] pb-[78.31px] bg-slate-900 rounded-2xl flex-col justify-center items-center inline-flex"
        >
          <div className="self-stretch flex-col justify-start items-start gap-[30.69px] inline-flex">
            <img className="w-10 h-10" src={youtube} />
            <div className="text-white text-[26.54px] font-bold leading-[37.16px] tracking-wide">
              Watch The
              <br />
              Video Guides
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Work;
