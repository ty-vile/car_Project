"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { updateSearchParams } from "@/utils";

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName);
  };

  return (
    <div className="w-full flex items-center justify-center my-8 px-4 ">
      {!isNext && (
        <Button
          title="Show more"
          buttonStyles="w-full max-w-[500px]"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
