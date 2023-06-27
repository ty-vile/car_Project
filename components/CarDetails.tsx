"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CarDetailsProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const transmissionType = transmission === "m" ? "manual" : "automatic";

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as="div"
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-20" />

            <div className="fixed inset-0 overflow-y-auto w-full">
              <div className="flex min-h-full items-center justify-center p-4 text-center w-full">
                <Transition.Child
                  as="div"
                  enter="ease-out duration-500"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-500"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-0"
                >
                  <Dialog.Panel className="relative w-[300px] md:w-[600px] lg:w-[800px]  h-fit max-h-[80vh] overflow-y-auto transform rounded-2xl bg-white text-left  shadow-xs transition-all flex flex-col p-4 pt-32 lg:pt-0 gap-5">
                    <button type="button" onClick={closeModal}>
                      <Image
                        src="/close.svg"
                        alt="Close Button"
                        width={32}
                        height={32}
                        className="object-contain absolute top-6 right-2 z-10 bg-white rounded-full p-1 hover:scale-95 transition-all"
                      />
                    </button>
                    <div className="h-[400px] relative">
                      <Image
                        src="/pattern.png"
                        fill
                        alt="Pattern Background"
                        className="object-cover rounded-xl"
                      />
                      <Image
                        src={generateCarImageUrl(car)}
                        height={200}
                        width={400}
                        className="absolute -top-32 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                        alt="Main Car Image"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-1 bg-gray-100 flex items-center justify-center p-2 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          width={200}
                          height={200}
                          alt="Car Image Angle One"
                        />
                      </div>
                      <div className="col-span-1 bg-gray-100 flex items-center justify-center p-2 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          width={200}
                          height={200}
                          alt="Car Image Angle Two"
                        />
                      </div>
                      <div className="col-span-1 bg-gray-100 flex items-center justify-center p-2 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          width={200}
                          height={200}
                          alt="Car Image Angle Three"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-full p-4 gap-4">
                      <Dialog.Title>
                        <h1 className="text-3xl">
                          {make.toUpperCase()} {model.toUpperCase()}
                        </h1>
                      </Dialog.Title>

                      <div className="flex items-center justify-between w-full">
                        <p>Make</p>
                        <p className="font-bold">{make.toUpperCase()}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Model</p>
                        <p className="font-bold">{model.toUpperCase()}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Year</p>
                        <p className="font-bold">{year}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Class</p>
                        <p className="font-bold">{car.class.toUpperCase()}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Transmission</p>
                        <p className="font-bold">
                          {transmissionType.toUpperCase()}
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Drive</p>
                        <p className="font-bold">{drive.toUpperCase()}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Fuel Type</p>
                        <p className="font-bold">{fuel_type.toUpperCase()}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Cylinders</p>
                        <p className="font-bold">{cylinders}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Displacement</p>
                        <p className="font-bold">{displacement}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>City MPG</p>
                        <p className="font-bold">{city_mpg}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Combination MPG</p>
                        <p className="font-bold">{combination_mpg}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Highway MPG</p>
                        <p className="font-bold">{highway_mpg}</p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
