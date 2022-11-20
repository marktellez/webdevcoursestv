import NextImage from "next/image";
import Emoji from "react-emoji-render";

// ☝🏻☝🏼☝🏽☝🏾☝🏿
// 👉🏻👉🏼👉🏽👉🏾👉🏿
// 👇🏻👇🏼👇🏽👇🏾👇🏿
// 👈🏻👈🏼👈🏽👈🏾👈🏿

export default function Homepage() {
  const colors = [
    "bg-blue-500",
    "bg-pink-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];
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
              <NextImage src="/twitch.png" height={80} width={80} />{" "}
            </a>
          </div>
          <div className="text-center">
            <a href="http://bit.ly/3EObT6O" target="_blank" rel="noreferrer">
              <NextImage src="/youtube.png" height={80} width={80} />{" "}
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

      <div className="flex flex-col items-center gap-2">
        <div className="md:text-2xl font-bold ">
          👉🏽👉🏾All times are Mexico City👈🏼👈🏽
        </div>
        <div className="text-xl md:text-4xl font-bold ">
          For the week of Nov 20th-26th
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 text-xs sm:text-md md:text-xl lg:text-2xl ">
        <div className="flex items-center justify-center gap-2 md:gap-8 ">
          {["mo", "tu", "we", "th", "fr"].map((day, i) => (
            <div
              key={day}
              className={`drop-shadow-lg ${colors[i]} w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-md text-xl sm:text-3xl md:text-5xl font-black flex items-center justify-center`}>
              <span className="text-shadow-xl">{day}</span>
            </div>
          ))}
        </div>

        <div className="flex items-start">
          <div className="border-r-4 mx-4 pr-4 text-right ">
            {["9am", "10am", "11am", "12pm", "7pm", "8pm"].map((slot) => (
              <div key={slot} className=" font-black">
                {slot}
              </div>
            ))}
          </div>
          <div>
            {[
              "Introduction to Modern Web Development",
              "Vanilla JavaScript for Beginners",
              "Writing Clean code using SOLID",
              "Designing UX using TailwindCSS",
              "Databases and CRUD - SQL and MongoDB",
              "Introduction to Web3 and Crypto",
            ].map((text, i) => (
              <div key={i} className=" font-semibold ">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full text-right p-8">2022 &copy; webdevcourses.tv</div>
    </div>
  );
}
