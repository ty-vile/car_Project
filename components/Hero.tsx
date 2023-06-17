"use client";

import Image from "next/image";
import { Button } from "@/components";

function Hero() {
  const handleScroll = () => {};

  return (
    <div className="flex flex-col z-0 max-w-[1800px] mx-auto xl:flex-row w-full">
      <div className="flex flex-col w-full gap-5 mb-20 px-4 pt-24 z-20 xl:mb-0  xl:pt-0 xl:justify-center ">
        <h1>Find, book, or rent a car - quickly and easily!</h1>
        <p className="text-xl">
          Streamline your car rental experience with our effortless booking
          process, allowing you to find the care you want sooner.
        </p>
        <Button
          title="View Cars"
          buttonStyles="w-fit"
          handleClick={handleScroll}
        />
      </div>
      <div className="relative flex items-center justify-center w-full">
        <Image
          src="/hero.png"
          alt="Car hero image"
          width={1000}
          height={600}
          className="z-10"
        />
        <Image
          src="/hero-bg.png"
          height={2000}
          width={2000}
          alt="Car background overlay"
          className="absolute -right-10 lg:-right-80"
        />
      </div>
    </div>
  );
}

export default Hero;
