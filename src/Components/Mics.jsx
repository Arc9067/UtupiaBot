import React from "react";

const Mics = () => {
  return (
    <section className="py-16 w-full relative" id="Mics">
      <div className="container flex justify-center items-center">
        <div className="md:w-10/12 flex flex-col justify-center items-center">
          <h1 className="text-white text-center text-5xl font-bold leading-[67.20px] tracking-wide">
            Tokenomics
          </h1>

          <div className="flex flex-col gap-5 items-center justify-center mt-6">
            <h1 className="text-center text-white text-2xl md:text-3xl font-bold leading-[44.80px] tracking-wide">
              Total supply: 100.000.000 mil
            </h1>
            <h1 className="text-center text-white text-2xl md:text-3xl font-bold leading-[44.80px] tracking-wide">
              Circulating supply: 90% (90mil)
            </h1>
          </div>

          <ul className=" flex flex-col gap-5 mt-16">
            <li
              className="flex items-center gap-4
          "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9414 5.43945L7.50195 15.8887L2.0625 10.4395L2.94141 9.56055L7.50195 14.1113L17.0625 4.56055L17.9414 5.43945Z"
                  fill="white"
                />
              </svg>
              <div>
                <span className="font-bold">Liq ETH:</span> 2 eth locked after
                launch 90 days in Unicrypt (at higher mcaps lock will be
                extended)
              </div>
            </li>
            <li
              className="flex items-center gap-4
          "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9414 5.43945L7.50195 15.8887L2.0625 10.4395L2.94141 9.56055L7.50195 14.1113L17.0625 4.56055L17.9414 5.43945Z"
                  fill="white"
                />
              </svg>
              <div>
                <span className="font-bold">Price on listing: </span>{" "}
                0.000000022 ETH / 1 UB
              </div>
            </li>
            <li
              className="flex items-center gap-4
          "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9414 5.43945L7.50195 15.8887L2.0625 10.4395L2.94141 9.56055L7.50195 14.1113L17.0625 4.56055L17.9414 5.43945Z"
                  fill="white"
                />
              </svg>
              <div>
                <span className="font-bold">Max Buy:</span> 2%
              </div>
            </li>
            <li
              className="flex items-center gap-4
          "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9414 5.43945L7.50195 15.8887L2.0625 10.4395L2.94141 9.56055L7.50195 14.1113L17.0625 4.56055L17.9414 5.43945Z"
                  fill="white"
                />
              </svg>
              <div>
                <span className="font-bold">Max Wallet:</span> 2%
              </div>
            </li>
            <li
              className="flex items-center gap-4
          "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9414 5.43945L7.50195 15.8887L2.0625 10.4395L2.94141 9.56055L7.50195 14.1113L17.0625 4.56055L17.9414 5.43945Z"
                  fill="white"
                />
              </svg>
              <div>
                <span className="font-bold">Tax:</span> 5/5%
              </div>
            </li>

            <li
              className="flex items-center gap-4
          "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9414 5.43945L7.50195 15.8887L2.0625 10.4395L2.94141 9.56055L7.50195 14.1113L17.0625 4.56055L17.9414 5.43945Z"
                  fill="white"
                />
              </svg>
              <div>
                <span className="font-bold">Reserve Distribution:</span> (10%)
              </div>
            </li>
            <li
              className="flex items-center gap-4
          "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9414 5.43945L7.50195 15.8887L2.0625 10.4395L2.94141 9.56055L7.50195 14.1113L17.0625 4.56055L17.9414 5.43945Z"
                  fill="white"
                />
              </svg>
              <div>6% team locked 90 days before launch</div>
            </li>
            <li
              className="flex items-center gap-4
          "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9414 5.43945L7.50195 15.8887L2.0625 10.4395L2.94141 9.56055L7.50195 14.1113L17.0625 4.56055L17.9414 5.43945Z"
                  fill="white"
                />
              </svg>
              <div>
                4% marketing (public sheet in google drive with every expenses
                on marketing)
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mics;
