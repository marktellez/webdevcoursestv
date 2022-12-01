export default function Homepage() {
  return (
    <div className="sm:mt-8 container mx-auto w-full md:w-2/3 lg:w-1/2 flex flex-col gap-2 md:gap-8">
      <div className="flex flex-wrap sm:flex-nowrap gap-2 md:gap-8 w-full">
        <p>
          Marks time is at an end due to health reasons. We wish you the best.
        </p>
        <div className="flex-col justify-center w-full sm:w-2/3">
          <p className="font-bold">Consider donating a buck or two!</p>
          <p>
            Your tips go directly to my beautiful wife of 10 years, my sweet
            Monse. Even in after my death.
          </p>
        </div>
        <div className="w-full sm:w-1/3 flex flex-wrap sm:flex-nowrap gap-2 md:gap-8 items-center justify-center">
          <img
            src="/tipjar.png"
            alt="Our Tipjar"
            className="w-[120px] h-[120px]"
          />
        </div>
      </div>

      <div className="w-full text-right p-8">2022 &copy; webdevcourses.tv</div>
    </div>
  );
}
