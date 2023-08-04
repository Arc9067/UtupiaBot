import React from "react";
import youtube from "../assets/youtube.svg";
import gitBook from "../assets/gitBook.svg";
import join from "../assets/join.svg";

const Work = () => {
  return (
    <section
      className="pt-14 md:pt-32 pb-14 w-full relative  text-white"
      id="work"
    >
      <div className="container gap-16 grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <article className="">
          <h1 className="text-white text-5xl font-bold leading-[67.20px] tracking-wide">
            How Does It Work?
          </h1>
          <p className="max-w-[456px] text-white text-xl font-normal leading-loose tracking-tight">
            Setting up your Utopia Bot is quite straightforward. Simply interact
            with the bot on Telegram and you're good to go.
          </p>
        </article>

        <div className="w-full justify-start items-center gap-4 inline-flex flex-col md:flex-row">
          <a
            href=""
            className="pl-[44.12px] w-full pr-[44.88px] pt-[78px] pb-[78.31px] bg-[#121228] rounded-2xl flex-col justify-center items-center inline-flex"
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
          <div className="flex-col w-full justify-start items-start gap-[12.44px] inline-flex">
            <a
              href="https://utopiabot.gitbook.com/"
              target="_blank"
              className="pl-[31.54px] w-full pr-[30.46px] pt-[79.62px] pb-[76.68px] bg-[#121228] rounded-2xl flex-col justify-center items-center flex"
            >
              <div className="self-stretch flex-col justify-start items-start gap-[30.69px] inline-flex">
                <img className="w-10 h-10" src={gitBook} />
                <div className="text-white text-[26.54px] font-bold leading-[37.16px] tracking-wide">
                  Read Full
                  <br />
                  Documentation
                </div>
              </div>
            </a>
            <a
              href=""
              className="pl-[50.12px] w-full pr-[62.88px] pt-[76.62px] pb-[73.68px] bg-[#121228] rounded-2xl flex-col justify-center items-center flex"
            >
              <div className="self-stretch w-full flex-col justify-start items-start gap-[30.69px] inline-flex">
                <img className="w-[46px] h-[46px]" src={join} />
                <div className="text-white text-[26.54px] font-bold leading-[37.16px] tracking-wide">
                  Join The <br />
                  Community
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
