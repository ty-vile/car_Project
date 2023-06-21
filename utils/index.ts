import { CarProps } from "@/types";

export async function getCars() {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.RAPID_HOST_URL,
  };

  // try {
  //   const response = await fetch(
  //     `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
  //     { headers: headers }
  //   );

  //   const result = await response.json();
  //   return result;
  // } catch (error) {
  //   console.log(error);
  // }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay: number = 50;
  const mileageFactor: number = 0.1;
  const ageFactor: number = 0.05;

  const mileageRate: number = city_mpg * mileageFactor;
  const ageRate: number = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "ADD_KEY_HERE");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  // IF RETURN DOESNT WORK - USE `${url}`
  return `${url}`;
};
