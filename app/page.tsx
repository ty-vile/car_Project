import { CarCard, Filter, Hero, SearchBar } from "@/components";
import { fakeCarsData } from "@/data/cars";
import { getCars } from "@/utils";

export default async function Home() {
  // NOTES
  // UNCOMMENT IN PRODUCTION
  // const allCars = await getCars();

  // NOTES
  // REMOVE IN PRODUCTION
  const allCars = fakeCarsData;

  const isCarsEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <div className="mt-12 max-w-[1800px] mx-auto p-4" id="catalogue">
        <div className="w-full flex flex-col">
          <h1>Car Catalogue</h1>
          <p>Explore our range of cars</p>
        </div>
        <div className="w-full">
          <SearchBar />

          <div className="flex">
            <Filter title="fuel" />
            <Filter title="year" />
          </div>
        </div>
        {!isCarsEmpty ? (
          <section>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              {allCars?.map((car) => {
                return <CarCard car={car} />;
              })}
            </div>
          </section>
        ) : (
          <div>
            <h2>No results found</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
