"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { Button, CarDetails } from "@/components";
import { calculateCarRent } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="flex flex-col col-span-1 w-full rounded-lg p-4 cursor-pointer bg-blue-100 hover:shadow-lg transition-all duration-1000">
      <div>
        <h2 className="font-bold">
          {make.toUpperCase()} {model.toUpperCase()}
        </h2>
      </div>

      <p className="relative mt-4 font-bold">
        <span className="absolute -top-2 left-0  text-md">$</span>
        <span className="mt-6 pl-3 text-3xl">{carRent}</span>
        <span className="text-xs">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={"/hero.png"}
          alt="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray-primary">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="Steering Wheel Icon"
            />
            <p>{transmission === "a" ? "AUTOMATIC" : "MANUAL"}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="Tire Icon" />
            <p>{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="Gas Icon" />
            <p>{city_mpg} MPG</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-4">
        <Button
          title={"View Car"}
          buttonStyles="w-full"
          handleClick={() => setIsOpen(true)}
        />
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard;
