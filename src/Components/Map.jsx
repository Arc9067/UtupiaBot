import React from "react";

const Map = () => {
  return (
    <section className="py-16 w-full relative" id="Feature2">
      <div className="container flex flex-col justify-center items-center gap-20">
        <h1 className="text-white text-4xl font-bold text-center leading-[67.20px] tracking-wide">
          Utopia Sniper Bot Features Implementation
        </h1>
        <div className="justify-start items-stretch gap-6 grid grid-cols-1 lg:grid-cols-3">
          <div className="p-10 bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col justify-start items-start gap-[35px] inline-flex">
            {/* <div className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
              Phase 1
            </div> */}
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
                🤖 BSC: PancakeSwap V3
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 ARBITRUM:  UniSwap V3, Camelot
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 BASE :  CBSWAP
              </div>
            </div>
          </div>

          <div className="p-10 bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col items-start gap-[33px] inline-flex">
            {/* <div className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
              Phase 3
            </div> */}
            <div className=" flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Grid trading (5 tokens at same time)
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Buy/Sell orders by price & Mcap
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Alpha Channel & Alpha Bot with fast snipe shortcut
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Dedicated phone app (Android & IOS)
              </div>
            </div>
          </div>
          <div className="p-10 bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col justify-end items-start gap-[33px] inline-flex">
            {/* <div className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
              Phase 2
            </div> */}
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Security with 2FA (two factor auth using google auth on your
                phone)
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Auto detection of Chain, Dex & Pairs
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Unlimited wallets
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Copy trading with private transaction detection
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 BloxRoute integration
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Snipe in presale
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
