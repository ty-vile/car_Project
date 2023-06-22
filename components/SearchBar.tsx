"use client";
import React, { use, useState } from "react";
import { SearchManufacturer } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ buttonClasses }: { buttonClasses: string }) => {
  return (
    <button
      type="submit"
      className={`absolute right-2 bg-gray-100 top-2 z-10 ${buttonClasses}`}
    >
      <Image
        src="/magnifying-glass.svg"
        alt="Search Button Icon"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [searchError, setSearchError] = useState(false);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return setSearchError(true);
    }

    setSearchError(false);
    return updateSeachParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSeachParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex flex-col lg:flex-row items-center "
    >
      <div className="my-4 w-full lg:w-6/12 relative">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          searchError={searchError}
        />
        <SearchButton buttonClasses="lg:hidden z-10" />
      </div>
      <div className="lg:ml-2 relative w-full lg:w-6/12 ">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-5 h-5 ml-4 top-4"
          alt="Model Search Icon"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Search car model"
          className={`p-4 bg-gray-100 rounded-lg w-full pl-12  ${
            searchError
              ? "border-red-500 border-2 focus:outline-red-500"
              : "focus:outline-blue-primary"
          }`}
        />
        <SearchButton buttonClasses="z-10" />
      </div>
    </form>
  );
}

export default SearchBar;
