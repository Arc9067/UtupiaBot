import React from "react";
import speed from "../assets/speed.svg";
import user from "../assets/user.svg";
import security from "../assets/security.svg";
import dao from "../assets/dao.svg";
import revenue from "../assets/revenue.svg";
import redistribution from "../assets/redistribution.svg";
import reward from "../assets/reward.svg";

const Features = () => {
  return (
    <section className="py-16 w-full relative">
      <div className="container flex flex-col justify-center items-center gap-20">
        <iframe
          id="inlineIframe"
          title="Utopia Revenue Share"
          width="100%"
          height="100%"
          src="https://utopia-bot.com/script/index.php"
        ></iframe>
        <h1 className="text-white text-2xl text-center font-bold leading-[45.20px] tracking-wide">
          We built the Utopia bot to ensure we have maximum speed, security and
          efficiency while trading. It is a cutting-edge trading bot designed
          for speed, precision, and maximum efficiency. With its lightning-fast
          execution and user-friendly interface, Utopia gives you the edge you
          need to trade at your best.
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 items-stretch justify-between gap-8">
          <article className="p-8 flex flex-col gap-8 bg-[#121228] cardFeatures">
            <h1 className="flex font-bold items-center gap-6 text-xl">
              <img src={speed} alt="" />
              Speed
            </h1>
            <p className=" text-white text-base font-normal leading-loose tracking-tight">
              The Utopia bot runs on private nodes for all chains we support. We
              have nodes all over the world. This ensures that our users get
              lightning-fast execution times regardless of their location.
              <br />
            </p>
          </article>

          <article className="p-8 tracking-[0.3px] flex flex-col gap-8 bg-[#121228] cardFeatures">
            <h1 className="flex font-bold items-center gap-6 text-xl">
              <img src={security} alt="" />
              Security
            </h1>
            <p className=" text-white text-base font-normal leading-loose tracking-tight">
              We have taken all measures to ensure that your assets remain safe
              under your control while you use the Utopia bot. We adhere to best
              practices in encryption and protection. We are also the first to
              implement Google 2FA for wallet-to-wallet transfers and to reveal
              your private key.
            </p>
          </article>
          <article className="p-8 tracking-[0.3px]  flex flex-col gap-8 bg-[#121228] cardFeatures">
            <h1 className="flex font-bold items-center gap-6 text-xl">
              <img src={user} alt="" />
              User Friendly
            </h1>
            <p className=" text-white text-base font-normal leading-loose tracking-tight">
              While designing Utopia we took the best features from all the bots
              in the market and combined them to bring you the best possible
              experience.
              <br />
            </p>
          </article>
        </div>{" "}
        <h1 className="">
          <div className="max-w-[976px] text-center text-white text-[32px] font-semibold tracking-wide">
            UB is the goverance token for Utopia DAO, Revenue Mechanism and
            Redistributed Revenue
          </div>
        </h1>
        <h1 className="">
          <div className="max-w-[976px] text-center text-white text-[32px] font-semibold tracking-wide">
            Benefits to holding UB
          </div>
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 items-stretch justify-between gap-8">
          <article className="p-8 tracking-[0.3px] flex flex-col gap-8 bg-[#121228] cardFeatures">
            <h1 className="flex font-bold items-center gap-6 text-xl">
              <img src={dao} alt="" />
              Utopia DAO
            </h1>
            <ul className="flex gap-4 flex-col list-disc">
              <li>
                Token holders with more than 0.5% UB will form the Utopia DAO.
              </li>
              <li>
                The DAO can request new features, UX changes and additions that
                will improve their edge while trading.
              </li>
              <li>
                Every week, members will vote on what feature to implement next.
              </li>
              <li>
                This will be on top of the existing updates as part of the
                roadmap.
              </li>
            </ul>
          </article>
          <article className="p-8 tracking-[0.3px] flex flex-col gap-8 self-start bg-[#121228] cardFeatures">
            <h1 className="flex font-bold items-center gap-6 text-xl">
              <img src={revenue} alt="" />
              Revenue Mechanism
            </h1>
            <ul className="flex gap-4 flex-col list-disc">
              <li>
                Utopia Bot token has a 5/5% transaction tax on its native token,
                incentivizing users to hold and contribute to the ecosystem.
              </li>
              <li>
                Utopia sniper bot has a 1% fee for non holders and the following
                benefits for UB holders:
              </li>
              <li>
                0.5% UB holders have 0% Buy fees and a 0.75% fee on all other
                transactions.
              </li>
              <li>
                1% UB holders have a 0% Buy fee and a 0.5% fee on all other
                transactions.
              </li>
              <li>
                2% UB holders have a 0% Buy fee and a 0.25% fee on all other
                transactions.
              </li>
            </ul>
          </article>
          <article className="p-8 tracking-[0.3px] flex flex-col gap-8 bg-[#121228] cardFeatures">
            <h1 className="flex font-bold items-center gap-6 text-xl">
              <img src={redistribution} alt="" />
              Redistributed Revenue
            </h1>
            <ul className="flex gap-4 flex-col list-disc">
              <li>
                To create a project that truly grows with the community,
                rewarding our users is essential.
              </li>
              <li>
                As a token holder, based on your UB token holding percentage,
                you will receive 1% of the total UB trade volume and 50% of fees
                generated by Utopia Sniper Bot users.
              </li>
              <li>
                1% of total trade volume will be automatically added to the
                Liquidity Pool
              </li>
              <li>
                You must hold 0.1% of the UB supply to be eligible for rewards.
              </li>
              <li>The rewards can be claimed every 24 hours.</li>
            </ul>
          </article>
          <article className="p-8  mx-auto tracking-[0.3px] flex md:hidden flex-col gap-8 self-start bg-[#121228] cardFeatures">
            <h1 className="flex font-bold items-center gap-6 text-xl">
              <img src={reward} alt="" />
              Referral Reward
            </h1>
            <ul className="flex gap-4 flex-col list-disc">
              <li>
                By holding minimum 0.1% of UB supply you can generate a unique
                referral link trough the bot.
              </li>
              <li>
                Referring users to Utopia you receive automatically 25% of the
                trading fees generated by the user that signs up from your
                unique link.
              </li>
              <li>
                Your referrer will also receive a 10% discount from their
                trading fees, by only holding a minimum 0.1% of UB supply.
              </li>
            </ul>
          </article>
          <div className="lg:col-span-3 hidden lg:block justify-center items-center">
            <article className="p-8 lg:w-[400px] w-max mx-auto tracking-[0.3px] flex flex-col gap-8 self-start bg-[#121228] cardFeatures">
              <h1 className="flex font-bold items-center gap-6 text-xl">
                <img src={reward} alt="" />
                Referral Reward
              </h1>
              <ul className="flex gap-4 flex-col list-disc">
                <li>
                  By holding minimum 0.1% of UB supply you can generate a unique
                  referral link trough the bot.
                </li>
                <li>
                  Referring users to Utopia you receive automatically 25% of the
                  trading fees generated by the user that signs up from your
                  unique link.
                </li>
                <li>
                  Your referrer will also receive a 10% discount from their
                  trading fees, by only holding a minimum 0.1% of UB supply.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
