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
                🤖ETH: UniSwap V2
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖BSC: PancakeSwap V2
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Easy and intuitive user interface
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Fast management and monitoring of all concomitant snipes
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Auto-configure snipe with method id and limit on
                transactions;
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Auto detection of Chain, Dex & Pairs
              </div>
            </div>
          </div>
          <div className="pl-6 pr-[17px] pt-8 pb-[26.60px] bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col justify-end items-start gap-[33px] inline-flex">
            <div className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
              Phase 2
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Protection : Anti HP, Anti High fees; Anti RUG, Anti
                Blacklist
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Snipe using our private router and get same features as
                sniping with contracts
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 5 wallets & 5 concomitant snipes
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Anti-Mev RPC
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Snipe liquidity & Open trading on block 0
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Snipe on multiple functions calls
              </div>
            </div>
          </div>
          <div className="pl-6 pr-[17px] pt-8 pb-[26.60px] bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col justify-end items-start gap-[33px] inline-flex">
            <div className="text-white text-2xl font-bold leading-[33.60px] tracking-wide">
              Phase 3
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Snipe with block delay
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Multiple Buys & Sells using 1 transaction
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Sell with profit
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Trailing & Stop loss
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Instant buy on token address paste
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Withdraw Eth/Token from sniping wallet to main wallet
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Security layer on private key and transactions
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Referral Bot
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Support 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
