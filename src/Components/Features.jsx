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
        <h1 className="text-white text-5xl font-bold leading-[67.20px] tracking-wide">
          Features
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-between gap-8">
          <article className="py-14 px-8 flex flex-col gap-8 bg-[#121228] cardFeatures">
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
          <article className="p-8 tracking-[0.3px] flex flex-col gap-8 self-start bg-[#121228] cardFeatures">
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
              Revenue Model
            </h1>
            <ul className="flex gap-4 flex-col list-disc">
              <li>
                Users of Utopia bot are automatically subject to a 1% fee on all
                transactions. 50% of this fee goes into development and 50% goes
                into the reward pool.
              </li>
              <li>
                0.5% Holders have 0% Buy fees and a 0.75% fee on all other
                transactions, including snipes.
              </li>
              <li>
                1% Holders have 0% Buy fee and a 0.5% fee on all other
                transactions, including snipes.
              </li>
              <li>
                2% Holders have 0% Buy fee and a 0.25% fee on all other
                transactions, including snipes
              </li>
            </ul>
          </article>
          <article className="p-8 tracking-[0.3px] flex flex-col gap-8 self-start bg-[#121228] cardFeatures">
            <h1 className="flex font-bold items-center gap-6 text-xl">
              <img src={redistribution} alt="" />
              Redistribution Revenue
            </h1>
            <ul className="flex gap-4 flex-col list-disc">
              <li>
                We believe that in order to create a tool that truly grows with
                the community it's essential to reward our users.
              </li>
              <li>
                As a token holder, you will receive 50% of transaction fees and
                50% of trading fees based on your holding percentage. 
              </li>
              <li>
                To be eligible for rewards you need to hold 0.1% of the UB
                supply. 
              </li>
              <li>These rewards can be claimed every 24 hours.</li>
            </ul>
          </article>
          <article className="p-8 tracking-[0.3px] flex flex-col gap-8 self-start bg-[#121228] cardFeatures">
            <h1 className="flex font-bold items-center gap-6 text-xl">
              <img src={reward} alt="" />
              Referral Reward
            </h1>
            <ul className="flex gap-4 flex-col list-disc">
              <li>
                By holding a minimum 0.1% of the UB supply you can generate a
                unique referral link trough the bot.
              </li>
              <li>
                By referring users to Utopia you receive 20% of the trading fees
                from the user of the link and 20% discount on your trading fees.
              </li>
              <li>
                The user of the link will receive a 10% discount on their
                trading fees.
              </li>
            </ul>
          </article>
        </div>{" "}
      </div>
    </section>
  );
};

export default Features;
