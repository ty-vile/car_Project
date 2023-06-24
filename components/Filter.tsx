"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

function Filter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);

  const router = useRouter();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className="w-3/12 p-4 bg-gray-100 mb-4 rounded-lg flex">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-full  z-10">
          <Listbox.Button className="flex items-center">
            <span className="block truncate px-4 text-gray-primary">
              {selected.title}
            </span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="Filter Button Icon"
              className="absolute right-0"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="pt-4">
              {options.map((option) => {
                return (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none p-4 py-2 first-child:pt-4 ${
                        active
                          ? "bg-blue-primary rounded-lg text-white"
                          : "text-gray-primary"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? "font-bold" : "font-light"
                        }`}
                      >
                        {option.title}
                      </span>
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default Filter;
