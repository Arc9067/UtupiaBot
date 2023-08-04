import React from "react";

const LongFeatures = () => {
  return (
    <section className="py-16 w-full relative" id="Feature2">
      <div className="container flex flex-col justify-center items-center gap-20">
        <h1 className="text-white text-5xl font-bold text-center leading-[67.20px] tracking-wide">
          A Short List of Features
        </h1>
        <div className="w-full justify-start items-start gap-6 grid lg:grid-cols-3 grid-cols-1">
          <div className="px-[23px] pt-[42px] pb-[61.60px] bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 ETH: UniSwap V2
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 BSC: PancakeSwap V2
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Easy and intuitive user interface
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Fast management and monitoring <br />
                of all concomitant snipes
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Auto-configure snipe with method id <br />
                and limit on transactions;
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Auto-detection of Pairs <br />
                (ETH/BNB, USDT, USDC, DAI)
              </div>
            </div>
          </div>
          <div className="pl-[36.62px] pr-[35.38px] pt-[28.39px] pb-[21.21px] bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col justify-end items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Protection against high fees & <br />
                honeypots
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖Snipe using our private router and <br />
                get same features as sniping with <br />
                contracts
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 5 wallets from start
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Anti-Mev RPC
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Snipe liquidity on block 0
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Snipe on multiple functions calls
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Snipe with block delay
              </div>
            </div>
          </div>
          <div className="pl-[26.25px] pr-[25.75px] pt-[28.39px] pb-[75.21px] bg-white bg-opacity-10 rounded-lg backdrop-blur-[32px] flex-col justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Multiple Buys & Sells (make multiple <br />
                buys in the same transaction hash)
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Sell with profits
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Stop loss
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Instant buy on contract paste
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Withdraw Eth/Token from sniping <br />
                wallet to main wallet
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                🤖 Security layer on private key and <br />
                transactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongFeatures;
