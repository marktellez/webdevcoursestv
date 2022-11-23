export function Schedule({}) {
  const colors = [
    "bg-blue-500",
    "bg-pink-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  return (
    <>
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
              "JavaScript Interview Questions/Answers",
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
    </>
  );
}
