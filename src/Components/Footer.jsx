import React from "react";
import footerLogo from "../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="py-10 w-full text-white">
      <div className="container flex flex-col justify-center items-center gap-10">
        <div className="flex-col justify-start items-center gap-16 flex-wrap flex">
          <div className="justify-center items-center gap-8 inline-flex flex-wrap">
            <a
              href="utopiabot.gitbook.com"
              target="_blank"
              className="justify-center items-center gap-2 flex"
            >
              <div className="w-12 h-12 relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.128 7.72363C24.5164 7.73057 23.9152 7.88302 23.3741 8.16838L3.14438 18.8439C2.602 19.1303 2.12395 19.5246 1.73963 20.0026C1.09926 20.8002 0.750152 21.7923 0.75 22.8151V24.0331C0.75014 24.5714 0.825365 25.1071 0.9735 25.6246C1.19235 26.3878 1.56641 27.0977 2.07225 27.7096C2.58461 28.3301 3.22112 28.8364 3.94088 29.1961L16.5113 35.4811C16.3968 36.2426 16.494 37.0208 16.7921 37.7308C16.9491 38.1023 17.1594 38.4489 17.4165 38.7598C17.8448 39.2784 18.3916 39.6863 19.0106 39.9493C19.524 40.1666 20.0761 40.278 20.6336 40.2766C20.9157 40.2765 21.1971 40.2482 21.4736 40.1923C22.007 40.0833 22.5135 39.8701 22.9643 39.5649C23.6343 39.1122 24.1589 38.4752 24.4748 37.7308C24.6361 37.3494 24.7392 36.9461 24.7808 36.5341C24.8196 36.1526 24.8062 35.7676 24.741 35.3896L40.1835 27.2394C40.4661 27.5126 40.7858 27.7448 41.133 27.929C41.8612 28.3146 42.6876 28.4749 43.5071 28.3895C43.9189 28.3475 44.322 28.2443 44.7034 28.0835C45.075 27.9266 45.4218 27.7162 45.7328 27.4591C46.2513 27.0308 46.6593 26.4841 46.9223 25.865C47.0837 25.4837 47.187 25.0803 47.2286 24.6684C47.2853 24.1075 47.2288 23.5409 47.0625 23.0023C46.9021 22.4863 46.6423 22.0067 46.2979 21.5904C45.8695 21.0718 45.3228 20.6639 44.7038 20.4009C44.1905 20.1834 43.6386 20.0719 43.0811 20.0731C42.7989 20.0733 42.5174 20.1017 42.2408 20.1579C41.5749 20.294 40.9527 20.5919 40.4291 21.0253C39.9106 21.4536 39.5026 22.0003 39.2396 22.6194C39.0221 23.1326 38.9107 23.6846 38.9119 24.242C38.9118 24.488 38.9334 24.7336 38.9764 24.9759L23.5421 33.1216C23.259 32.8459 22.9383 32.6116 22.5896 32.4256C21.9874 32.105 21.3155 31.9378 20.6333 31.9389C20.3478 31.9389 20.0631 31.968 19.7835 32.0255C19.2442 32.137 18.7326 32.355 18.2786 32.6668C18.0557 32.8197 17.8481 32.9939 17.6588 33.1869L5.268 26.9915C4.83063 26.7726 4.44343 26.4654 4.13089 26.0892C3.81835 25.713 3.58726 25.2761 3.45225 24.806C3.36135 24.4894 3.31528 24.1616 3.31538 23.8321C3.3155 23.6311 3.34083 23.431 3.39075 23.2363C3.4859 22.8702 3.67041 22.5335 3.92775 22.2564C4.11494 22.0535 4.33646 21.8853 4.58213 21.7595C4.82883 21.6329 5.09591 21.5508 5.37113 21.5169C5.7557 21.4706 6.14573 21.5226 6.50475 21.668L18.8644 27.8476C19.4116 28.121 20.0161 28.2602 20.6278 28.2534C21.2395 28.2467 21.8408 28.0944 22.3819 27.809L42.0668 17.4196C42.1534 17.3739 42.2291 17.3184 42.2936 17.2558C42.419 17.134 42.5077 16.9795 42.5498 16.8099C42.6129 16.5597 42.5749 16.2947 42.444 16.0723C42.3988 15.9966 42.3431 15.9276 42.2786 15.8675C42.2098 15.8036 42.1321 15.7499 42.048 15.7081L26.8916 8.13013C26.3444 7.85679 25.74 7.71771 25.1284 7.72438L25.128 7.72363ZM43.0811 22.6389C43.2955 22.6389 43.5076 22.6817 43.7051 22.7649C43.9919 22.8859 44.2372 23.0879 44.4109 23.3461C44.5305 23.523 44.6134 23.722 44.6548 23.9315C44.6962 24.1409 44.6953 24.3566 44.652 24.5656C44.6101 24.7708 44.5282 24.9656 44.4109 25.139C44.2366 25.3967 43.9915 25.5984 43.7051 25.7199C43.5077 25.8035 43.2955 25.8464 43.0811 25.8459C42.8668 25.8457 42.6547 25.8029 42.4571 25.7199C42.1704 25.5989 41.9251 25.3969 41.7514 25.1386C41.5725 24.8739 41.477 24.5618 41.477 24.2424C41.477 23.9229 41.5725 23.6108 41.7514 23.3461C41.9863 22.9988 42.3473 22.7566 42.7579 22.6711C42.8625 22.6501 42.9705 22.6389 43.0811 22.6389ZM20.634 34.505C20.8483 34.505 21.0605 34.5478 21.258 34.631C21.5448 34.752 21.79 34.954 21.9638 35.2123C22.1132 35.4332 22.205 35.6881 22.2308 35.9536C22.2566 36.2191 22.2156 36.4869 22.1115 36.7325C21.9904 37.0191 21.7884 37.2643 21.5303 37.4379C21.222 37.6465 20.8506 37.7411 20.4801 37.7054C20.1096 37.6696 19.7631 37.5058 19.5004 37.2421C19.3541 37.0959 19.2374 36.9229 19.1565 36.7325C19.0729 36.5351 19.03 36.3229 19.0305 36.1085C19.0304 35.8941 19.0733 35.6818 19.1565 35.4841C19.2371 35.2936 19.3539 35.1206 19.5004 34.9745C19.6467 34.8284 19.8197 34.7118 20.01 34.631C20.2074 34.5474 20.4196 34.5046 20.634 34.505Z"
                    fill="#346DDB"
                  />
                </svg>
              </div>
              <div className="text-white text-xl font-normal leading-[33.60px] tracking-wide">
                Gitbook
              </div>
            </a>
            <a
              href="https://t.me/utopiabotportal"
              target="_blank"
              className="justify-center items-center gap-2 flex"
            >
              <div className="w-12 h-12 relative">
                <div className="w-12 h-12 left-0 top-0 absolute">
                  <svg
                    width="40"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2111_387)">
                      <path
                        d="M24.6203 48.0374C37.8854 48.0374 48.639 37.2839 48.639 24.0187C48.639 10.7535 37.8854 0 24.6203 0C11.3551 0 0.601562 10.7535 0.601562 24.0187C0.601562 37.2839 11.3551 48.0374 24.6203 48.0374Z"
                        fill="url(#paint0_linear_2111_387)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.4515 23.7571C18.4476 20.6893 23.1242 18.7064 25.4811 17.7337C32.1405 14.9652 33.5248 14.4788 34.4227 14.4414C34.6097 14.4414 35.0587 14.4788 35.358 14.7033C35.5825 14.8904 35.6573 15.1522 35.6947 15.3393C35.7321 15.5264 35.7695 15.9379 35.7321 16.2746C35.358 20.0533 33.8241 29.2941 33.001 33.5217C32.6643 35.3175 31.9909 35.9161 31.3549 35.9909C29.9706 36.1031 28.8857 35.0556 27.5388 34.1951C25.4437 32.8109 24.2465 31.9504 22.1889 30.6035C19.8319 29.0322 21.3658 28.1717 22.7126 26.7875C23.0493 26.4133 29.2224 20.8389 29.3346 20.3151C29.3346 20.2403 29.372 20.0158 29.2224 19.9036C29.0727 19.7914 28.8857 19.8288 28.736 19.8662C28.5115 19.9036 25.1444 22.1483 18.5973 26.563C17.6246 27.2364 16.7641 27.5357 15.9784 27.5357C15.1179 27.5357 13.4718 27.0494 12.2372 26.6378C10.7407 26.1515 9.5435 25.8896 9.65573 25.0665C9.73056 24.655 10.3292 24.206 11.4515 23.7571Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2111_387"
                        x1="0.601562"
                        y1="24.0013"
                        x2="48.6042"
                        y2="24.0013"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2AABEE" />
                        <stop offset="1" stop-color="#229ED9" />
                      </linearGradient>
                      <clipPath id="clip0_2111_387">
                        <rect
                          width="48"
                          height="48"
                          fill="white"
                          transform="translate(0.601562)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="text-white text-xl font-normal leading-[33.60px] tracking-wide">
                Telegram
              </div>
            </a>
            <a
              href="twitter.com/Utopiabots"
              target="_blank"
              className="justify-center items-center gap-2 flex"
            >
              <div className="w-[58.80px] h-12 relative">
                <svg
                  width="40"
                  height="48"
                  viewBox="0 0 59 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2111_394)">
                    <path
                      d="M58.9974 5.84467C56.7958 6.82 54.4605 7.46021 52.0693 7.744C54.56 6.25118 56.4724 3.88723 57.373 1.07062C55.0052 2.47568 52.4147 3.46563 49.7134 3.9977C47.513 1.65351 44.3783 0.188477 40.9087 0.188477C34.2471 0.188477 28.846 5.58928 28.846 12.2505C28.846 13.196 28.9528 14.1165 29.1584 14.9996C19.1335 14.4964 10.2455 9.69431 4.29599 2.39648C3.2579 4.17799 2.66307 6.25026 2.66307 8.46055C2.66307 12.6455 4.79275 16.3374 8.02919 18.5006C6.11367 18.4406 4.24029 17.9232 2.56546 16.9917C2.56477 17.0422 2.56477 17.0927 2.56477 17.1435C2.56477 22.9878 6.72263 27.8631 12.2406 28.9713C10.4643 29.4543 8.60112 29.525 6.79336 29.1779C8.32822 33.9701 12.783 37.4574 18.0612 37.555C13.933 40.79 8.73174 42.7185 3.0806 42.7185C2.10682 42.7185 1.14682 42.6614 0.203125 42.55C5.54123 45.9724 11.8816 47.9694 18.6935 47.9694C40.8807 47.9694 53.0132 29.589 53.0132 13.6494C53.0132 13.1262 53.0017 12.606 52.9783 12.0888C55.3398 10.3817 57.3781 8.26721 58.9974 5.84467Z"
                      fill="#55ACEE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2111_394">
                      <rect
                        width="58.8"
                        height="48"
                        fill="white"
                        transform="translate(0.203125)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="text-white text-xl font-normal leading-[33.60px] tracking-wide">
                Twitter
              </div>
            </a>
          </div>
          <div className="text-white text-xl font-medium leading-9">
            Copyright © 2023 UtopiaBot. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
