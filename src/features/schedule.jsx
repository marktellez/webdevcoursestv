export function Schedule({}) {
  const colors = {
    0: "bg-blue-500",
    1: "bg-yellow-500",
    2: "bg-green-500",
    3: "bg-purple-500",
  };

  const classes = [
    { hour: "10am", topic: "Vanilla JavaScript for Absolute Beginners" },
    { hour: "11am", topic: "Designing User Interfaces using TailwindCSS" },
    { hour: "12pm", topic: "Introduction to Modern Web Development" },
    { hour: "7pm", topic: "Databases and CRUD - MongoDB and SQL" },
    { hour: "8pm", topic: "Learn JavaScript building a Web RPG Game" },
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-12">
      <div className="flex flex-col items-center gap-2">
        <div className="md:text-2xl font-bold ">
          👉🏽👉🏾All times are Mexico City👈🏼👈🏽
        </div>
        <div className="text-xl md:text-4xl font-bold ">
          For the week of Nov 20th-26th
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 text-xs sm:text-md md:text-xl lg:text-2xl ">
        <div className="flex items-center justify-center gap-2 md:gap-8 ">
          {["mo", "tu", "we", "th"].map((day, i) => (
            <div
              key={day}
              className={`drop-shadow-lg ${colors[i]} w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-md text-xl sm:text-3xl md:text-5xl font-black flex items-center justify-center`}>
              <span className="text-shadow-xl">{day}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-2 md:gap-8">
          <div className="">
            {classes.map(({ hour, topic }, i) => (
              <div key={hour} className="font-bold text-md">
                {hour} - {topic}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 text-xs sm:text-md md:text-xl lg:text-2xl ">
        <div className="flex items-center justify-center gap-2">
          {["fr"].map((day, i) => (
            <div
              key={day}
              className={`drop-shadow-lg bg-red-600 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-md text-xl sm:text-3xl md:text-5xl font-black flex items-center justify-center`}>
              <span className="text-shadow-xl">{day}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="font-black">FREE LIVE ONSTEAM HELP</div>
          <div className="font-bold text-md">
            10am-12pm and again at 7pm-10pm
          </div>
          <div className="font-bold text-md">
            JavaScript, CSS, JavaScript, ReactJS, NextJS, MongoDB, SQL
          </div>
        </div>
      </div>
    </div>
  );
}
