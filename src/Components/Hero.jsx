import React from "react";
import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <section
      className="w-full py-24
  "
      id="hero"
    >
      <div className="container flex flex-col justify-center items-center gap-8">
        <h1 className="text-center text-5xl leading-tight font-extrabold md:text-7xl">
          The Most Dynamic TG <br />{" "}
          <span className="text-[#FF7000]">Trading Bot</span>
        </h1>
        <p className="max-w-[823px] text-center text-white text-base font-normal leading-loose tracking-tight">
          We built the Utopia bot to ensure we have maximum speed, security and
          efficiency while trading. It is a cutting-edge trading bot designed
          for speed, precision, and maximum efficiency. With its lightning-fast
          execution and user-friendly interface, Utopia gives you the edge you
          need to trade at your best.
        </p>

        <img src={logo} alt="" />
        <div className=" h-[59px] justify-start items-start gap-3 flex-col md:flex-row flex">
          <a
            href="https://t.me/utopiabotportal"
            target="_blank"
            className="w-[226px] px-[21px] py-2 bg-white rounded-full flex-col justify-center items-center gap-2.5 inline-flex"
          >
            <div className="justify-center items-center gap-3 inline-flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1976_384)">
                      <path
                        d="M12.0094 24.5187C18.6419 24.5187 24.0187 19.1419 24.0187 12.5094C24.0187 5.87677 18.6419 0.5 12.0094 0.5C5.37677 0.5 0 5.87677 0 12.5094C0 19.1419 5.37677 24.5187 12.0094 24.5187Z"
                        fill="url(#paint0_linear_1976_384)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.42498 12.3785C8.92303 10.8446 11.2613 9.85321 12.4398 9.36685C15.7695 7.98259 16.4616 7.73941 16.9106 7.7207C17.0041 7.7207 17.2286 7.73941 17.3782 7.85165C17.4905 7.94518 17.5279 8.07612 17.5466 8.16965C17.5653 8.26318 17.584 8.46895 17.5653 8.63731C17.3782 10.5266 16.6113 15.147 16.1997 17.2608C16.0314 18.1587 15.6947 18.458 15.3767 18.4954C14.6845 18.5516 14.142 18.0278 13.4686 17.5976C12.4211 16.9054 11.8225 16.4752 10.7936 15.8018C9.61516 15.0161 10.3821 14.5859 11.0555 13.8937C11.2239 13.7067 14.3104 10.9195 14.3665 10.6576C14.3665 10.6202 14.3852 10.5079 14.3104 10.4518C14.2356 10.3957 14.142 10.4144 14.0672 10.4331C13.955 10.4518 12.2714 11.5742 8.99786 13.7815C8.5115 14.1182 8.08126 14.2679 7.68843 14.2679C7.25818 14.2679 6.43511 14.0247 5.81781 13.8189C5.06956 13.5757 4.47097 13.4448 4.52709 13.0333C4.5645 12.8275 4.8638 12.603 5.42498 12.3785Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1976_384"
                        x1="0"
                        y1="12.5007"
                        x2="24.0013"
                        y2="12.5007"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2AABEE" />
                        <stop offset="1" stop-color="#229ED9" />
                      </linearGradient>
                      <clipPath id="clip0_1976_384">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-black text-xs font-normal leading-none tracking-tight">
                  Launch UTOPIABot on
                </div>
                <div className="text-black text-base font-bold leading-snug tracking-tight">
                  TELEGRAM
                </div>
              </div>
            </div>
          </a>
          <a
            href="htts://twitter.com/Utopiabots"
            target="_blank"
            className="w-[226px] h-[59px] px-[21px] py-2 bg-white rounded-full flex-col justify-center items-center gap-2.5 inline-flex"
          >
            <div className="justify-center items-center gap-3 inline-flex">
              <div className="w-[29.40px] h-6 relative">
                <svg
                  width="30"
                  height="25"
                  viewBox="0 0 30 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2092_1238)">
                    <path
                      d="M29.694 3.42258C28.5932 3.91024 27.4256 4.23035 26.23 4.37224C27.4753 3.62583 28.4315 2.44386 28.8818 1.03555C27.6979 1.73808 26.4027 2.23306 25.052 2.49909C23.9518 1.327 22.3845 0.594482 20.6497 0.594482C17.3188 0.594482 14.6183 3.29488 14.6183 6.62549C14.6183 7.09825 14.6717 7.5585 14.7745 8.00003C9.76206 7.74843 5.31804 5.3474 2.34331 1.69848C1.82426 2.58924 1.52685 3.62537 1.52685 4.73052C1.52685 6.823 2.59169 8.66893 4.20991 9.75054C3.25215 9.72054 2.31546 9.46186 1.47804 8.99609C1.4777 9.02135 1.4777 9.04662 1.4777 9.07199C1.4777 11.9941 3.55663 14.4318 6.31559 14.9859C5.42746 15.2274 4.49587 15.2628 3.59199 15.0892C4.35942 17.4853 6.58683 19.2289 9.22591 19.2777C7.16179 20.8953 4.56118 21.8595 1.73561 21.8595C1.24872 21.8595 0.768722 21.8309 0.296875 21.7752C2.96593 23.4865 6.13611 24.4849 9.54204 24.4849C20.6357 24.4849 26.7019 15.2948 26.7019 7.32493C26.7019 7.06334 26.6962 6.80325 26.6845 6.54464C27.8652 5.69108 28.8843 4.63385 29.694 3.42258Z"
                      fill="#55ACEE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2092_1238">
                      <rect
                        width="29.4"
                        height="24"
                        fill="white"
                        transform="translate(0.296875 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-black text-xs font-normal leading-none tracking-tight">
                  Follow UTOPIABot on
                </div>
                <div className="text-black text-base font-bold leading-snug tracking-tight">
                  TWITTER
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
