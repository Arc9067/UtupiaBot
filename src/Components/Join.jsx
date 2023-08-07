import React from "react";

const Join = () => {
  return (
    <section className="py-16  w-full relative">
      <div className="container relative z-10 ">
        <div className="w-full p-10 gap-10 bg-[#906487] rounded-[20px] flex justify-center items-center flex-col text-center join">
          <h1 className="text-white text-5xl font-bold leading-[67.20px] tracking-wide">
            Wanna Try UtopiaBot Out?
          </h1>
          <p className="text-white text-xl font-normal leading-7 tracking-tight">
            Launch utupia Sniper Bot
          </p>
          <div className=" justify-start items-start gap-3 flex-col md:flex-row flex">
            <div className="w-[226px] px-[21px] py-2 bg-white rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
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
                <a
                  href="https://t.me/utopiabotportal"
                  target="_blank"
                  className="flex-col justify-start items-start gap-1 inline-flex"
                >
                  <div className="text-black text-base font-bold leading-snug tracking-tight">
                    TELEGRAM
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
