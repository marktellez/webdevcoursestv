export function Header({}) {
  return (
    <div>
      <div className="flex gap-4 items-center justify-center pt-2">
        <div className="">
          <img src="/logo.png" className="w-[40px] -[40px]" />
        </div>
        <div className="text-2xl md:text-6xl font-black">
          webdev<span className="text-yellow-500">courses</span>
          <span className="text-blue-500">.tv</span>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center pt-2">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
      </div>
    </div>
  );
}
