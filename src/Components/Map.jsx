import React from "react";

const Map = () => {
  return (
    <section className="py-16 w-full relative" id="Feature2">
      <div className="container flex flex-col justify-center items-center gap-20">
        <h1 className="text-white text-5xl font-bold text-center leading-[67.20px] tracking-wide">
          Roadmap
        </h1>
        <div className="justify-start items-start gap-6 grid grid-cols-1 lg:grid-cols-3">
          <div className="pl-[27px] pr-[47px] pt-8 pb-[68.60px] bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col justify-start items-start gap-[35px] inline-flex">
            <div className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
              Phase 1
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 V2 website including claim page
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 New Chains & Markets
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 ETH: UniSwap V3
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖BSC: PancakeSwap V3
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖ARBITRUM: UniSwap V3, Camelot
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖BASE : CBSWAP
              </div>
            </div>
          </div>
          <div className="pl-6 pr-[17px] pt-8 pb-[26.60px] bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col justify-end items-start gap-[33px] inline-flex">
            <div className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
              Phase 2
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Security with 2FA (two factor auth <br />
                using google auth on your phone)
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Auto detection of Chain, Dex & Pairs
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Unlimited wallets
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Copy trading with private transaction <br />
                detection
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 BloxRoute integration
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Snipe in presale
              </div>
            </div>
          </div>
          <div className="w-[360px] h-[461.60px] relative bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px]">
            <div className="left-[22px] top-[98px] absolute flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Grid trading (5 tokens at same time)
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Buy/Sell orders by price & Mcap
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Alpha Channel & Alpha Bot with <br />
                fast snipe shortcut
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Web interface that will communicate <br />
                with the Telegram bot
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Dedicated phone app (Android & IOS)
              </div>
            </div>
            <div className="left-[25px] top-[32px] absolute text-white text-2xl font-bold leading-[33.60px] tracking-wide">
              Phase 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
