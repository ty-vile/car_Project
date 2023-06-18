"use client";
import { useState } from "react";
import { SearchManufacturer } from "@/components";

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch}>
      <div className="my-4 w-full">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
