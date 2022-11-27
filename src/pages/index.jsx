import { Header } from "@/features/header";
import { Schedule } from "@/features/schedule";

// ☝🏻☝🏼☝🏽☝🏾☝🏿
// 👉🏻👉🏼👉🏽👉🏾👉🏿
// 👇🏻👇🏼👇🏽👇🏾👇🏿
// 👈🏻👈🏼👈🏽👈🏾👈🏿

export default function Homepage() {
  return (
    <div className="sm:mt-8 container mx-auto w-full md:w-2/3 lg:w-1/2 flex flex-col gap-2 md:gap-8">
      <Header />
      <div className="flex flex-col gap-6 items-center justify-center p-8">
        <div>
          <p className="md:text-lg">
            You don&apos;t have to take out a loan from your Rich Uncle or a
            high-interest bank to learn web development.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <a href="https://bit.ly/3hE7qL1" target="_blank" rel="noreferrer">
              <img src="/twitch.png" height={80} width={80} />{" "}
            </a>
          </div>
          <div className="text-center">
            <a href="http://bit.ly/3EObT6O" target="_blank" rel="noreferrer">
              <img src="/youtube.png" height={80} width={80} />{" "}
            </a>
          </div>
        </div>

        <p className="font-bold">
          <span className="italic font-black">Instead</span>, you can learn
          online, live, and for the price of a cup of coffee if you can afford
          it, or nothing at all except good wishes if you can&apos;t!
        </p>

        <div className="flex flex-wrap sm:flex-nowrap gap-2 md:gap-8 w-full">
          <div className="flex-col justify-center w-full sm:w-2/3">
            <p className="font-bold">Consider donating a buck or two!</p>
            <p>
              Your tips go directly to my beautiful wife of 10 years, my sweet
              Monse. Even in after my death.
            </p>
            <p>
              You are also supporting a small Mexican family-owned and operated
              business wholly owned and operated in Mexico.
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
      </div>

      <Schedule />

      <div className="w-full text-right p-8">2022 &copy; webdevcourses.tv</div>
    </div>
  );
}
