import { Schedule } from "@/features/schedule";

export default function SchedulePage({}) {
  return (
    <div className="sm:mt-8 container mx-auto w-full md:w-2/3 lg:w-1/2 flex flex-col gap-2 md:gap-8">
      <Schedule />
    </div>
  );
}
