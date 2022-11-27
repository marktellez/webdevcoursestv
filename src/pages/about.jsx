import { Header } from "@/features/header";
import wishlist from "@/data/wishlist.json";
import equipment from "@/data/equipment.json";

export default function AboutPage({}) {
  return (
    <div className="sm:mt-8 container mx-auto w-full md:w-2/3 lg:w-1/2 flex flex-col gap-2 md:gap-8">
      <Header />
      <div className="border border-brown-700 rounded-t-md">
        <h3
          className={
            "text-2xl font-semibold mb-4 bg-brown-700 py-2 px-8  rounded-t-md"
          }>
          Wishlist
        </h3>

        <div className="flex flex-wrap dm_flex-nowrap  justify-center">
          {wishlist.map(({ amazon_url, image, price, item }) => (
            <a key={amazon_url} href={amazon_url}>
              <div className={" rounded-lg shadow-lg p-4 mb-4 text-center"}>
                <img
                  className={"rounded-full w-[100px] h-[100px]"}
                  src={image}
                />
                <h3 className={"text-xl font-semibold mt-4"}>{item}</h3>
                <p
                  className={
                    "p-[5px] text-white text-sm my-2 font-semibold italic"
                  }>
                  {price}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="border border-brown-700 rounded-t-md">
        <h3
          className={
            "text-2xl font-semibold mb-4 bg-brown-700 py-2 px-8  rounded-t-md"
          }>
          Wishlist
        </h3>

        <div className="flex flex-wrap dm_flex-nowrap justify-center">
          {equipment.map(({ url, image, item }) => (
            <a key={url} href={url}>
              <div className={" rounded-lg shadow-lg p-4 mb-4 text-center"}>
                <img
                  className={"rounded-full w-[100px] h-[100px]"}
                  src={image}
                />
                <h3 className={"text-xl font-semibold mt-4"}>{item}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
