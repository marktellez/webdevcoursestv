import NextImage from "next/image";
import { Schedule } from "@/features/schedule";

// ☝🏻☝🏼☝🏽☝🏾☝🏿
// 👉🏻👉🏼👉🏽👉🏾👉🏿
// 👇🏻👇🏼👇🏽👇🏾👇🏿
// 👈🏻👈🏼👈🏽👈🏾👈🏿

export default function Homepage() {
  return (
    <div className="sm:mt-8 container mx-auto w-full md:w-2/3 lg:w-1/2 flex flex-col gap-2 md:gap-8">
      <div className="flex gap-4 items-center justify-center">
        <div className="pt-2">
          <NextImage src="/logo.png" height={60} width={60} />
        </div>
        <div className="text-2xl md:text-6xl font-black">
          webdev<span className="text-yellow-500">courses</span>
          <span className="text-blue-500">.tv</span>
        </div>
      </div>

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
        <p className="text-md italic text-yellow-400 font-black">
          🔥 You can learn 5 days a week in the curriculum below. 👇🏽👇🏻👇🏿👇🏼👇🏾
        </p>
      </div>

      <Schedule />

      <div className="w-full text-right p-8">2022 &copy; webdevcourses.tv</div>
    </div>
  );
}
