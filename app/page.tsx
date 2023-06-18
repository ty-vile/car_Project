import { Filter, Hero, SearchBar } from "@/components";

export default function Home() {
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
      </div>
    </main>
  );
}
