import TripCard from "@/components/TripCard";
import TripsHeader from "@/components/TripsHeader";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto overflow-hidden">
      <div className="mt-7 flex flex-col gap-4 pb-[100px]">
        <TripsHeader />
        <div className="overflow-y-scroll mt-[60px] ">
          {[1, 2, 3, 4, 2, 5, 6, 7, 4].map((x, key) => (
            <TripCard key={key} />
          ))}
        </div>
      </div>
    </main>
  );
}
