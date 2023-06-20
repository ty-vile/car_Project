"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[18px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Dropdown Button"
            />
          </Combobox.Button>
          <Combobox.Input
            className="p-4 bg-gray-100 rounded-lg w-full pl-12 focus:outline-blue-primary"
            placeholder="Select Model"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="bg-gray-100 rounded-lg">
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative  px-4 py-2 my-1 first:my-0 ${
                      active ? "bg-blue-primary text-white" : "text-gray-dark"
                    }`
                  }
                  value={item}
                >
                  {({ active, selected }) => (
                    <li
                      className={`${
                        active ? "bg-blue-primary text-white" : "text-gray-dark"
                      }`}
                    >
                      {item}
                    </li>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
