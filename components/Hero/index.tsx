"use client";
import Image from "next/image";
import { useState } from "react";
import LottieAnimation from "./animation";
import GetStartedModal from "../GetStartedModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSuccess = () => {
    setHasSubmitted(true);
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Looking to craft a cutting-edge digital product?
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Look no further than! {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                BizAssist
                </span>
              </h1>
              <p>
                BizAssist is your one-stop solution for bringing your digital vision to life. We're a team of passionate experts dedicated to helping businesses like yours build impactful websites, apps, and other technical solutions.
              </p>

              {!hasSubmitted && (
                <div className="mt-10">
                  <button
                    onClick={handleGetStartedClick}
                    aria-label="get started button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>

            <div className="animate_right md:w-1/2">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                <div className="shadow-solid-l dark:hidden">
                <LottieAnimation width="100%" animationUrl={"https://lottie.host/6e5503cc-41ce-4ee9-bd7e-d0df8ae64bed/RKj8KMzEWD.json"}/>
                </div>
                <div className="hidden shadow-solid-l dark:block">
                <LottieAnimation width="100%" animationUrl={"https://lottie.host/6e5503cc-41ce-4ee9-bd7e-d0df8ae64bed/RKj8KMzEWD.json"}/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetStartedModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        onSuccess={handleFormSuccess}
      />
    </>
  );
};

export default Hero;
