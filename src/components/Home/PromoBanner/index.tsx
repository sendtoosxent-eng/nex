import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-10 lg:py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        
        {/* --- Main Large Banner --- */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] mb-7.5">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-10 lg:py-17.5 xl:py-22.5 px-6 lg:px-14 xl:px-19">
            <div className="max-w-[550px] w-full text-center lg:text-left mt-8 lg:mt-0">
              <span className="block font-medium text-lg lg:text-xl text-dark mb-3">
                Apple iPhone 14 Plus
              </span>

              <h2 className="font-bold text-2xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
                UP TO 30% OFF
              </h2>

              <p className="text-sm lg:text-base">
                iPhone 14 has the same superspeedy chip that’s in iPhone 13 Pro,
                A15 Bionic, with a 5‑core GPU, powers all the latest features.
              </p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-blue py-3 px-10 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
              >
                Buy Now
              </a>
            </div>

            {/* Mobile: Relative positioning to stay in flow. Desktop: Back to original feel */}
            <div className="relative lg:absolute lg:bottom-0 lg:right-4 xl:right-26 lg:z-[-1]">
              <Image
                src="/images/hero/plug-hero-iphone.png"
                alt="promo img"
                width={274}
                height={350}
                className="w-[200px] lg:w-[274px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          
          {/* --- Small Banner 1 (iPhone 17) --- */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-6 lg:px-10">
             <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="w-full max-w-[180px] lg:max-w-none">
                   <Image
                    src="/images/products/I phone 13 case __-Photoroom.png"
                    alt="promo img"
                    width={241}
                    height={241}
                    className="mx-auto lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-5 lg:-z-1 h-auto"
                  />
                </div>

                <div className="text-center lg:text-right w-full">
                  <span className="block text-base lg:text-lg text-dark mb-1.5">
                    Experience the Bold new Titanium look
                  </span>
                  <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                    The new iPhone 17
                  </h2>
                  <p className="font-semibold text-custom-1 text-teal">
                    Discounted with 20% off
                  </p>
                  <a
                    href="#"
                    className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:opacity-90 mt-6"
                  >
                    Grab Now
                  </a>
                </div>
             </div>
          </div>

          {/* --- Small Banner 2 (Watch Ultra) --- */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-6 lg:px-10">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left w-full">
                <span className="block text-base lg:text-lg text-dark mb-1.5">
                  Apple Watch Ultra
                </span>
                <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                  Up to <span className="text-orange">40%</span> off
                </h2>
                <p className="max-w-[285px] mx-auto lg:mx-0 text-sm lg:text-custom-sm">
                  The aerospace-grade titanium case strikes the perfect balance.
                </p>
                <a
                  href="#"
                  className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5"
                >
                  Buy Now
                </a>
              </div>

              <div className="w-full max-w-[150px] lg:max-w-none">
                <Image
                  src="/images/promo/promo-03.png"
                  alt="promo img"
                  width={200}
                  height={200}
                  className="mx-auto lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-5 lg:-z-1 h-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanner;